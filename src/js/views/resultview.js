import View from './view';
import previewView from './previewview';
import icons from '../../img/icons.svg';

class ResultView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = `0 results found. try again.`;
  _message = '';

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView();
