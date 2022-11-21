import { async } from 'regenerator-runtime';
import { API_URL, SEC_PRE_PAGE } from './config';
import { AJAX } from './helper';
import { API_KEY } from './keyConfig';

export const state = {
  recipe: {},
  search: { query: '', result: [], page: 1, prePage: SEC_PRE_PAGE },
  bookmark: [],
};

const createRecipeObj = function (data) {
  let { recipe } = data.data;

  return {
    id: recipe.id,
    title: recipe.title,
    image: recipe.image_url,
    publisher: recipe.publisher,
    ingredients: recipe.ingredients,
    cookingTime: recipe.cooking_time,
    servings: recipe.servings,
    sourceUrl: recipe.source_url,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    // add api key to show your own recipe in results
    const data = await AJAX(`${API_URL}/${id}?key=${API_KEY}`);
    state.recipe = createRecipeObj(data);

    // reload bookmark
    if (state.bookmark.some(bm => bm.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};

export const loadSearchResult = async function (query) {
  try {
    // reset page
    state.search.page = 1;
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);

    state.search.result = data.data.recipes.map(reci => {
      return {
        id: reci.id,
        title: reci.title,
        image: reci.image_url,
        publisher: reci.publisher,
        ...(reci.key && { key: reci.key }),
      };
    });
  } catch (err) {
    throw err;
  }
};

export const getSearchResultPage = function (page = state.search.page) {
  // page 1 , start 0 to 9(include)
  state.search.page = page;
  const start = (page - 1) * state.search.prePage;
  const end = page * state.search.prePage;
  return state.search.result.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * (newServings / state.recipe.servings);
  });
  state.recipe.servings = newServings;
};

const storageBookmark = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
};

const clearBookmark = function () {
  localStorage.clear('bookmark');
};

export const addBookmark = function (recipe) {
  state.bookmark.push(recipe);
  state.recipe.bookmarked = true;
  storageBookmark();
};

export const deleteBookmark = function (id) {
  const index = state.bookmark.findIndex(el => el.id === id);
  state.bookmark.splice(index, 1);
  state.recipe.bookmarked = false;

  storageBookmark();
};

export const uploadRecipe = async function (newRecipe) {
  try {
    // Format the ingredient
    const ingredients = Object.entries(newRecipe)
      .filter(rep => rep[0].startsWith('ingredient') && rep[1] !== '')
      .map(ing => {
        console.log(ing[1]);
        const ingArr = ing[1].split(',').map(el => el.trim());
        console.log(ingArr);
        if (ingArr.length !== 3)
          throw new Error('The Format is not correctly!');

        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    // Format data that API Allow (object)
    const recipe = {
      title: newRecipe.title,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      ingredients,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      source_url: newRecipe.sourceUrl,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);

    state.recipe = createRecipeObj(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const storage = localStorage.getItem('bookmark');
  if (storage) state.bookmark = JSON.parse(storage);
};

init();

// clearBookmark();
