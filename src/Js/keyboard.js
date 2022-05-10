import Key from './key';
import keyboardData from './keyboard-data';

class Keyboard {
  constructor(textField) {
    this.keyboard = document.createElement('div');
    this.textField = textField;
    this.keys = [];
  }

  init() {
    this.createLayout();
    this.keyboard.classList.add('keyboard');
    return this.keyboard;
  }

  createLayout() {
    keyboardData.forEach((row) => {
      const rowEl = document.createElement('div');
      rowEl.classList.add('row');
      row.forEach((item) => {
        const key = new Key(item, this.textField);
        this.keys.push(key);
        rowEl.append(key.init());
      });

      this.keyboard.append(rowEl);
    });
  }
}

export default Keyboard;
