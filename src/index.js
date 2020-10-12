const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(n) {
  let arr = [];
  let clean = '';
  let final = '';
  for (let i = 0; i <= n.length; i++) {
    if (i % 10 === 0 && i !== 0) {
      if (n.substring(i - 10, i) === '**********') {
        clean = clean + '**'
      } else {
        clean = clean + ' ' + (n.substring(i - 10, i) * 1) + ' '
      }
    }
  }
  clean = clean.split(' ')
  clean.forEach(elem => {
    let count = ''
    for (let i = 0; i <= elem.length; i++) {
      if (i % 2 === 0 && i !== 0) {
        if (elem.substring(i - 2, i) === '10') {
          count = count + '.'
        } else if (elem.substring(i - 2, i) === '11') {
          count = count + '-'
        } else if (elem.substring(i - 2, i) === '**') {
          count = count + '*'
        }
      }
    }
    arr.push(count)
  })
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i] !== '*') {
      final = final + MORSE_TABLE[arr[i]]
    } else if (arr[i] === '*') {
      final = final + ' '
    }
  }
  return final
}

module.exports = {
  decode
}