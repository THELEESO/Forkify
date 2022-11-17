import View from './view';
import icons from '../../img/icons.svg';

class ResultView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = `0 results found. try again.`;
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(data) {
    return `
  <li class="preview">
      <a class="preview__link" href="#${data.id}">
          <figure class="preview__fig">
              <img src="${data.image}" alt="${data.title}" />
          </figure>
          <div class="preview__data">
              <h4 class="preview__title">${data.title}</h4>
              <p class="preview__publisher">${data.publisher}</p>
          </div>
      </a>
  </li>`;
  }
}

export default new ResultView();
