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

    return this.key;
  }

  addClasses(...rest) {
    this.key.classList.add(...rest);
  }

  removeClasses(...rest) {
    this.key.classList.remove(...rest);
  }

  setText(crntLanguage = 'en') {
    if (this.func) {
      this.printText = this.text;
    } else {
      this.printText = this.text[crntLanguage].text;
    }
    this.key.textContent = this.printText;
  }

  shiftText(crntLanguage) {
    this.printText = this.text[crntLanguage].shift;
    this.key.textContent = this.printText;
  }
}

export default Key;
