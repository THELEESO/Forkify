import 'core-js/stable';
import { async } from 'regenerator-runtime';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeview.js';
import searchView from './views/searchview.js';
import resultView from './views/resultview.js';
import paginationView from './views/paginationview.js';

// from Parcel: while change code and save, the page wont refresh.
// if (module.hot) {
//   module.hot.accept();
// }

// call API (https://forkify-api.herokuapp.com/v2)
const controlRecipe = async function () {
  try {
    recipeView.renderSpinner();

    const id = window.location.hash.slice(1);
    if (!id) return;
    console.log(id);

    // get recipes data
    await model.loadRecipe(id);
    // rendering web
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    resultView.renderSpinner();

    // get query
    const query = searchView.getQuery();
    if (!query) return;

    // get result
    await model.loadSearchResult(query);

    // render result
    // resultView.render(model.state.search.result);
    resultView.render(model.getSearchResultPage());

    // render pagination
    paginationView.render(model.state.search);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlPagination = function (goto) {
  // render goto result
  resultView.render(model.getSearchResultPage(goto));

  // render goto pagination
  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};

init();
