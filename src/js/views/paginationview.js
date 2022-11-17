import View from './view';
import icons from '../../img/icons.svg';
import { SEC_PRE_PAGE } from '../config.js';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      // use dataset to get the value
      const goTo = +btn.dataset.goto;
      handler(goTo);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.page;
    const allPages = Math.ceil(this._data.result.length / SEC_PRE_PAGE);

    // if page 1 and have others pages
    if (currentPage === 1 && allPages > 1)
      return `
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;

    // if last page
    if (currentPage === allPages && allPages > 1)
      return `
    <button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
    </button>`;

    // if the page is not first and last
    if (currentPage < allPages)
      return `
    <button data-goto="${
      currentPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currentPage - 1}</span>
    </button>
    <button data-goto="${
      currentPage + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${currentPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;

    // if only page 1 or no result
    return '';
  }
}

export default new PaginationView();
