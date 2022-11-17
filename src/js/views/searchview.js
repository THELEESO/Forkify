class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearQuery();
    return query;
  }

  _clearQuery() {
    return (this._parentEl.querySelector('.search__field').value = '');
  }

  addHandlerSearch(handler) {
    // use button or enter will trigger
    // if only use button only button will trigger!
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
