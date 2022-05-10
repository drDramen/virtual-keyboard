export default function makeElement(parentNode, tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  parentNode.appendChild(elem);
  return elem;
}
