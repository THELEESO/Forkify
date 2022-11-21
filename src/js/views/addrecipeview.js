import View from './view';
import icons from '../../img/icons.svg';

class addRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _message = 'Your Recipe was Uploaded.';

  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _overLay = document.querySelector('.overlay');
  _window = document.querySelector('.add-recipe-window');

  // use constructor: run the function while page loading
  constructor() {
    super();
    this._openForm();
    this._closeForm();
  }

  formSwitch() {
    this._overLay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _openForm() {
    this._btnOpen.addEventListener('click', this.formSwitch.bind(this));
  }

  _closeForm() {
    this._btnClose.addEventListener('click', this.formSwitch.bind(this));
    this._overLay.addEventListener('click', this.formSwitch.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      // catch the data from the FORM, and change it to Array
      const dataArr = [...new FormData(this)];
      // make Array data to Object
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
