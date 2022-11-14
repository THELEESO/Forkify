import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeview.js';

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

const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};

init();

// recipeView.addHandlerRender(controlRecipe);
