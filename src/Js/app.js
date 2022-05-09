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
    this.changeCapsShift();
    this.unblur();
    this.textFieldListners();
    return this.app;
  }

  unblur() {
    this.textField.addEventListener('blur', () => {
      setTimeout(() => {
        this.textField.focus();
      }, 0);
    });
  }

  textFieldListners() {
    this.textField.addEventListener('keydown', (e) => {
      const key = this.keyboard.keys.find((item) => item.code === e.code);

      if (!key && e.code !== 'F12') {
        e.preventDefault();
        return;
      }

      if (e.code === 'F12') return;
      if (/Alt.*/g.test(e.code)) e.preventDefault();

      if (key.code === 'CapsLock' && !e.repeat) {
        e.preventDefault();
        this.caps = !this.caps;

        if (this.caps) {
          key.addClasses('active');
        } else {
          key.removeClasses('active');
        }
        this.changeCapsShift(e.shiftKey || this.shift);
      } else {
        key.addClasses('active');

        if (((e.ctrlKey || e.metaKey) && e.altKey && !e.repeat) || e.code === 'MetaLeft') {
          e.preventDefault();
          this.lang = this.lang === 'ru' ? 'en' : 'ru';
          localStorage.setItem('lang', this.lang);
          this.changeCapsShift(e.shiftKey || this.shift);
          return;
        }

        if (/Shift.*/g.test(e.code) && !e.repeat) {
          e.preventDefault();
          if (!e.isTrusted) {
            this.shift = !this.shift;
            if (this.shift) {
              key.addClasses('active');
            } else {
              this.keyboard.keys.forEach((item) => {
                if (/Shift.*/g.test(item.code)) {
                  item.removeClasses('active');
                }
              });
            }
            this.changeCapsShift(this.shift);
          } else {
            this.changeCapsShift(true);
          }
          return;
        }

        if (e.code === 'Backspace') {
          e.preventDefault();
          this.backspace();
          return;
        }

        if (e.code === 'Delete') {
          e.preventDefault();
          this.delete();
          return;
        }

        if (e.code === 'Tab') {
          e.preventDefault();
          this.inputText('\t');
          return;
        }

        if (e.code === 'Enter') {
          e.preventDefault();
          this.inputText('\n');
          return;
        }

        if (
          e.code === 'ArrowLeft' ||
          e.code === 'ArrowUp' ||
          e.code === 'ArrowRight' ||
          e.code === 'ArrowDown'
        ) {
          e.preventDefault();
          this.inputText(key.printText);
        }

        if (!key.func && !e.ctrlKey) {
          e.preventDefault();
          this.inputText(key.printText);
        }
      }
    });

    this.textField.addEventListener('keyup', (e) => {
      const key = this.keyboard.keys.find((item) => item.code === e.code);

      if (!key && e.code !== 'F12') {
        e.preventDefault();
        return;
      }

      if (e.code === 'F12') return;

      if (/Shift.*/g.test(e.code)) {
        e.preventDefault();

        if (e.isTrusted) {
          this.shift = false;
          this.keyboard.keys.forEach((item) => {
            if (/Shift.*/g.test(item.code)) {
              item.removeClasses('active');
            }
          });
          this.changeCapsShift(false);
        }
        return;
      }

      if (e.code !== 'CapsLock') {
        key.removeClasses('active');
      }
    });
  }

  changeCapsShift(shift = false) {
    const toUp = (this.caps && !shift) || (!this.caps && shift);

    this.keyboard.keys.forEach((key) => {
      if (key.func) return;
      if ((this.caps || !shift) && !/Key.*/g.test(key.code)) {
        key.setText(this.lang, shift);
        return;
      }

      key.setText(this.lang, toUp);
    });
  }

  inputText(chars) {
    const cursorPos = this.textField.selectionStart;
    const startText = this.textField.value.slice(0, cursorPos);
    const endText = this.textField.value.slice(this.textField.selectionEnd);

    this.textField.value = `${startText}${chars}${endText}`;
    this.textField.selectionStart = cursorPos + chars.length;
    this.textField.selectionEnd = this.textField.selectionStart;
  }

  backspace() {
    if (this.textField.selectionStart !== this.textField.selectionEnd) {
      this.inputText('');
    } else {
      const cursorPos = Math.max(0, this.textField.selectionStart - 1);
      const startText = this.textField.value.slice(0, cursorPos);
      const endText = this.textField.value.slice(this.textField.selectionEnd);

      this.textField.value = startText + endText;
      this.textField.selectionStart = cursorPos;
      this.textField.selectionEnd = this.textField.selectionStart;
    }
  }

  delete() {
    if (this.textField.selectionStart !== this.textField.selectionEnd) {
      this.inputText('');
    } else {
      const cursorPos = this.textField.selectionStart;
      const startText = this.textField.value.slice(0, cursorPos);
      const endText = this.textField.value.slice(this.textField.selectionEnd + 1);

      this.textField.value = startText + endText;
      this.textField.selectionStart = cursorPos;
      this.textField.selectionEnd = this.textField.selectionStart;
    }
  }
}

export default App;
