import icons from '../../img/icons.svg';

export default class View {
  _data;

  render(data) {
    // here data only check input arugement is true or false, can check the data is [] or not.
    // data = undefined, null or data is array but empty
    console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  // update any dom if it's changed
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    // create virtual DOM (save in memory)
    // createRange() select a range to create/insert the html
    const newDOM = document.createRange().createContextualFragment(newMarkup);

    // compare Virtual DOM and Real DOM
    const newEl = newDOM.querySelectorAll('*');
    const currentEl = this._parentEl.querySelectorAll('*');

    newEl.forEach((newEl, i) => {
      const curEl = currentEl[i];

      // replace the text
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild.nodeValue.trim() !== ''
      ) {
        curEl.innerText = newEl.innerText;
      }

      // replace attributes
      if (!newEl.isEqualNode(curEl)) {
        // console.log(Array.from(newEl.attributes));
        // Array.from(newEl.attributes).forEach(attr => console.log(attr.name));
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  _clear() {
    this._parentEl.innerHTML = '';
  }

  // (public) for controller call
  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>`;
    this._clear();
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}
