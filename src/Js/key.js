class Key {
  constructor(params, textField) {
    this.code = params.code;
    this.func = params.func;
    this.text = params?.text || params?.lang;
    this.classes = params.class;
    this.printText = '';
    this.key = document.createElement('button');
    this.textField = textField;
    this.isMouseDown = false;
  }

  init() {
    this.addClasses(...this.classes, 'btn-reset');
    this.setText();
    this.mouseEvent('mousedown', 'keydown');
    this.mouseEvent('mouseup', 'keyup');
    this.mouseEvent('mouseout', 'keyup');

    return this.key;
  }

  addClasses(...rest) {
    this.key.classList.add(...rest);
  }

  removeClasses(...rest) {
    this.key.classList.remove(...rest);
  }

  setText(crntLanguage = 'en', up = false) {
    if (this.func) {
      this.printText = this.text;
    } else {
      this.printText = up ? this.text[crntLanguage].shift : this.text[crntLanguage].text;
    }
    this.key.textContent = this.printText;
  }

  mouseEvent(from, to) {
    this.textField.focus();

    this.key.addEventListener(from, () => {
      this.textField.focus();
      if (from === 'mousedown') this.isMouseDown = true;

      if (from === 'mouseout' && !this.isMouseDown) return;

      const event = new KeyboardEvent(to, {
        bubbles: true,
        cancelable: true,
        code: this.code,
        view: window,
      });

      this.textField.dispatchEvent(event);
      if (from === 'mouseup' || from === 'mouseout') this.isMouseDown = false;
    });
  }
}

export default Key;
