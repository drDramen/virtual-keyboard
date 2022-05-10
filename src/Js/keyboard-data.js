const keyboardData = [
  [
    {
      code: 'Backquote',
      func: false,
      lang: {
        en: {
          text: '`',
          shift: '~',
        },
        ru: {
          text: 'ё',
          shift: 'Ё',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit1',
      func: false,
      lang: {
        en: {
          text: '1',
          shift: '!',
        },
        ru: {
          text: '1',
          shift: '!',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit2',
      func: false,
      lang: {
        en: {
          text: '2',
          shift: '@',
        },
        ru: {
          text: '2',
          shift: '"',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit3',
      func: false,
      lang: {
        en: {
          text: '3',
          shift: '#',
        },
        ru: {
          text: '3',
          shift: '№',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit4',
      func: false,
      lang: {
        en: {
          text: '4',
          shift: '$',
        },
        ru: {
          text: '4',
          shift: ';',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit5',
      func: false,
      lang: {
        en: {
          text: '5',
          shift: '%',
        },
        ru: {
          text: '5',
          shift: '%',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit6',
      func: false,
      lang: {
        en: {
          text: '6',
          shift: '^',
        },
        ru: {
          text: '6',
          shift: ':',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit7',
      func: false,
      lang: {
        en: {
          text: '7',
          shift: '&',
        },
        ru: {
          text: '7',
          shift: '?',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit8',
      func: false,
      lang: {
        en: {
          text: '8',
          shift: '*',
        },
        ru: {
          text: '8',
          shift: '*',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit9',
      func: false,
      lang: {
        en: {
          text: '9',
          shift: '(',
        },
        ru: {
          text: '9',
          shift: '(',
        },
      },
      class: ['key'],
    },
    {
      code: 'Digit0',
      func: false,
      lang: {
        en: {
          text: '0',
          shift: ')',
        },
        ru: {
          text: '0',
          shift: ')',
        },
      },
      class: ['key'],
    },
    {
      code: 'Minus',
      func: false,
      lang: {
        en: {
          text: '-',
          shift: '_',
        },
        ru: {
          text: '-',
          shift: '_',
        },
      },
      class: ['key'],
    },
    {
      code: 'Equal',
      func: false,
      lang: {
        en: {
          text: '=',
          shift: '+',
        },
        ru: {
          text: '=',
          shift: '+',
        },
      },
      class: ['key'],
    },
    {
      code: 'Backspace',
      func: true,
      text: 'Backspace',
      class: ['key-func', 'key-backspace', 'key'],
    },
  ],
  [
    {
      code: 'Tab',
      func: true,
      text: 'Tab',
      class: ['key-func', 'key-tab', 'key'],
    },
    {
      code: 'KeyQ',
      func: false,
      lang: {
        en: {
          text: 'q',
          shift: 'Q',
        },
        ru: {
          text: 'й',
          shift: 'Й',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyW',
      func: false,
      lang: {
        en: {
          text: 'w',
          shift: 'W',
        },
        ru: {
          text: 'ц',
          shift: 'Ц',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyE',
      func: false,
      lang: {
        en: {
          text: 'e',
          shift: 'E',
        },
        ru: {
          text: 'у',
          shift: 'У',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyR',
      func: false,
      lang: {
        en: {
          text: 'r',
          shift: 'R',
        },
        ru: {
          text: 'к',
          shift: 'К',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyT',
      func: false,
      lang: {
        en: {
          text: 't',
          shift: 'T',
        },
        ru: {
          text: 'е',
          shift: 'Е',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyY',
      func: false,
      lang: {
        en: {
          text: 'y',
          shift: 'Y',
        },
        ru: {
          text: 'н',
          shift: 'Н',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyU',
      func: false,
      lang: {
        en: {
          text: 'u',
          shift: 'U',
        },
        ru: {
          text: 'г',
          shift: 'Г',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyI',
      func: false,
      lang: {
        en: {
          text: 'i',
          shift: 'I',
        },
        ru: {
          text: 'ш',
          shift: 'Ш',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyO',
      func: false,
      lang: {
        en: {
          text: 'o',
          shift: 'O',
        },
        ru: {
          text: 'щ',
          shift: 'Щ',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyP',
      func: false,
      lang: {
        en: {
          text: 'p',
          shift: 'P',
        },
        ru: {
          text: 'з',
          shift: 'З',
        },
      },
      class: ['key'],
    },
    {
      code: 'BracketLeft',
      func: false,
      lang: {
        en: {
          text: '[',
          shift: '{',
        },
        ru: {
          text: 'х',
          shift: 'Х',
        },
      },
      class: ['key'],
    },
    {
      code: 'BracketRight',
      func: false,
      lang: {
        en: {
          text: ']',
          shift: '}',
        },
        ru: {
          text: 'ъ',
          shift: 'Ъ',
        },
      },
      class: ['key'],
    },
    {
      code: 'Backslash',
      func: false,
      lang: {
        en: {
          text: '\\',
          shift: '|',
        },
        ru: {
          text: '\\',
          shift: '/',
        },
      },
      class: ['key'],
    },
  ],
  [
    {
      code: 'CapsLock',
      func: true,
      text: 'Caps',
      class: ['key-func', 'key-caps', 'key'],
    },
    {
      code: 'KeyA',
      func: false,
      lang: {
        en: {
          text: 'a',
          shift: 'A',
        },
        ru: {
          text: 'ф',
          shift: 'Ф',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyS',
      func: false,
      lang: {
        en: {
          text: 's',
          shift: 'S',
        },
        ru: {
          text: 'ы',
          shift: 'Ы',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyD',
      func: false,
      lang: {
        en: {
          text: 'd',
          shift: 'D',
        },
        ru: {
          text: 'в',
          shift: 'В',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyF',
      func: false,
      lang: {
        en: {
          text: 'f',
          shift: 'F',
        },
        ru: {
          text: 'а',
          shift: 'А',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyG',
      func: false,
      lang: {
        en: {
          text: 'g',
          shift: 'G',
        },
        ru: {
          text: 'п',
          shift: 'П',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyH',
      func: false,
      lang: {
        en: {
          text: 'h',
          shift: 'H',
        },
        ru: {
          text: 'р',
          shift: 'Р',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyJ',
      func: false,
      lang: {
        en: {
          text: 'j',
          shift: 'J',
        },
        ru: {
          text: 'о',
          shift: 'О',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyK',
      func: false,
      lang: {
        en: {
          text: 'k',
          shift: 'K',
        },
        ru: {
          text: 'л',
          shift: 'Л',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyL',
      func: false,
      lang: {
        en: {
          text: 'l',
          shift: 'L',
        },
        ru: {
          text: 'д',
          shift: 'Д',
        },
      },
      class: ['key'],
    },
    {
      code: 'Semicolon',
      func: false,
      lang: {
        en: {
          text: ';',
          shift: ':',
        },
        ru: {
          text: 'ж',
          shift: 'Ж',
        },
      },
      class: ['key'],
    },
    {
      code: 'Quote',
      func: false,
      lang: {
        en: {
          text: '\'',
          shift: '"',
        },
        ru: {
          text: 'э',
          shift: 'Э',
        },
      },
      class: ['key'],
    },
    {
      code: 'Enter',
      func: true,
      text: 'Enter',
      class: ['key-func', 'key'],
    },
  ],
  [
    {
      code: 'ShiftLeft',
      func: true,
      text: 'Shift',
      class: ['key-func', 'key'],
    },
    {
      code: 'KeyZ',
      func: false,
      lang: {
        en: {
          text: 'z',
          shift: 'Z',
        },
        ru: {
          text: 'я',
          shift: 'Я',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyX',
      func: false,
      lang: {
        en: {
          text: 'x',
          shift: 'X',
        },
        ru: {
          text: 'ч',
          shift: 'Ч',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyC',
      func: false,
      lang: {
        en: {
          text: 'c',
          shift: 'C',
        },
        ru: {
          text: 'с',
          shift: 'С',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyV',
      func: false,
      lang: {
        en: {
          text: 'v',
          shift: 'V',
        },
        ru: {
          text: 'м',
          shift: 'М',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyB',
      func: false,
      lang: {
        en: {
          text: 'b',
          shift: 'B',
        },
        ru: {
          text: 'и',
          shift: 'И',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyN',
      func: false,
      lang: {
        en: {
          text: 'n',
          shift: 'N',
        },
        ru: {
          text: 'т',
          shift: 'Т',
        },
      },
      class: ['key'],
    },
    {
      code: 'KeyM',
      func: false,
      lang: {
        en: {
          text: 'm',
          shift: 'M',
        },
        ru: {
          text: 'ь',
          shift: 'Ь',
        },
      },
      class: ['key'],
    },
    {
      code: 'Comma',
      func: false,
      lang: {
        en: {
          text: ',',
          shift: '<',
        },
        ru: {
          text: 'б',
          shift: 'Б',
        },
      },
      class: ['key'],
    },
    {
      code: 'Period',
      func: false,
      lang: {
        en: {
          text: '.',
          shift: '>',
        },
        ru: {
          text: 'ю',
          shift: 'Ю',
        },
      },
      class: ['key'],
    },
    {
      code: 'Slash',
      func: false,
      lang: {
        en: {
          text: '/',
          shift: '?',
        },
        ru: {
          text: '.',
          shift: ',',
        },
      },
      class: ['key'],
    },
    {
      code: 'ShiftRight',
      func: true,
      text: 'Shift',
      class: ['key-func', 'key'],
    },
    {
      code: 'ArrowUp',
      func: true,
      text: '↑',
      class: ['key'],
    },
    {
      code: 'Delete',
      func: true,
      text: 'Del',
      class: ['key'],
    },
  ],
  [
    {
      code: 'ControlLeft',
      func: true,
      text: 'Ctrl',
      class: ['key-func', 'key'],
    },
    {
      code: 'MetaLeft',
      func: false,
      lang: {
        en: {
          text: 'EN',
          shift: 'EN',
        },
        ru: {
          text: 'RU',
          shift: 'RU',
        },
      },
      class: ['key-func', 'key-lang', 'key'],
    },
    {
      code: 'AltLeft',
      func: true,
      text: 'Alt',
      class: ['key'],
    },
    {
      code: 'Space',
      func: false,
      lang: {
        en: {
          text: ' ',
          shift: ' ',
        },
        ru: {
          text: ' ',
          shift: ' ',
        },
      },
      class: ['key-space', 'key'],
    },
    {
      code: 'AltRight',
      func: true,
      text: 'Alt',
      class: ['key'],
    },
    {
      code: 'ControlRight',
      func: true,
      text: 'Ctrl',
      class: ['key-func', 'key'],
    },
    {
      code: 'ArrowLeft',
      func: true,
      text: '←',
      class: ['key'],
    },
    {
      code: 'ArrowDown',
      func: true,
      text: '↓',
      class: ['key'],
    },
    {
      code: 'ArrowRight',
      func: true,
      text: '→',
      class: ['key'],
    },
  ],
];

export default keyboardData;
