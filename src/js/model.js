import { async } from 'regenerator-runtime';
import { API_URL, SEC_PRE_PAGE } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
  search: { query: '', result: [], page: 1, prePage: SEC_PRE_PAGE },
  bookmark: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    let { recipe } = data.data;

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      image: recipe.image_url,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
    };

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

    const data = await getJSON(`${API_URL}?search=${query}`);

    state.search.result = data.data.recipes.map(reci => {
      return {
        id: reci.id,
        title: reci.title,
        image: reci.image_url,
        publisher: reci.publisher,
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

const init = function () {
  const storage = localStorage.getItem('bookmark');
  if (storage) state.bookmark = JSON.parse(storage);
};

init();
