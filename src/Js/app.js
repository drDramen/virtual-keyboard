import Keyboard from './keyboard';
import makeElement from './function';

class App {
  constructor() {
    this.app = document.createElement('div');
    this.container = makeElement(this.app, 'div', 'container');
    this.textField = makeElement(this.container, 'textarea', 'textField');
    this.keyboard = new Keyboard(this.textField);
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
    this.caps = false;
    this.shift = false;
  }

  init() {
    this.textField.setAttribute('autofocus', 'true');
    this.container.append(this.keyboard.init());
    this.changeLanguage();
    this.unblur();
    return this.app;
  }

  changeLanguage() {
    this.keyboard.keys.forEach((key) => {
      key.setText(this.lang);
    });
  }

  unblur() {
    this.textField.addEventListener('blur', () => {
      setTimeout(() => {
        this.textField.focus();
      }, 0);
    });
  }
}

export default App;
