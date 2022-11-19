import { async } from 'regenerator-runtime';
import { API_URL, SEC_PRE_PAGE } from './config';
import { getJSON } from './helper';

export const state = {
  recipe: {},
  search: { query: '', result: [], page: 1, prePage: SEC_PRE_PAGE },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    console.log(data);

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

    console.log(recipe);
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
