import './main.scss';
import App from './Js/app';
import makeElement from './Js/function';

const siteContainer = makeElement(document.body, 'div', 'site-container');
const descrContainer = makeElement(siteContainer, 'div', 'container');
const descr = makeElement(descrContainer, 'p', 'description');
const app = new App(siteContainer);

document.firstElementChild.classList.add('page');
document.body.classList.add('page__body');
siteContainer.append(app.init());
descr.innerHTML =
  'The keyboard was created in Windows. Press Ctrl + Alt, Alt + Ctrl or RU-EN button to change language.';

function keyDown() {
  app.keyboard.keys.forEach((key) => {
    if (!/Shift.*|CapsLock/g.test(key.code)) {
      key.removeClasses('active');
    }
  });
}

window.addEventListener('blur', keyDown);
