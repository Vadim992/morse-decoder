const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const numDecoder = {
    '00' : '',
    '10' : '.',
    '11' : '-',
    '**********' : ' '
  };
  let begin = 0;
  let end = 10;
  let arr = [];

  for (let i = 0; i < (expr.length / 10); i++) {
       arr[i] = expr.slice(begin, end);
       begin += 10;
       end += 10;
  }

 arr = arr.map( function(item) {
     if (item === '*'.repeat(10))  {

     return item = numDecoder['**********'] ;

     } else {
        let arrMorse = [];
        theBegin = 0;
        theEnd = 2;
        for (let i = 0; i < (item.length / 2); i++) {
            arrMorse[i] = numDecoder[item.slice(theBegin, theEnd)];
            theBegin += 2;
            theEnd += 2;
       }

       return item = MORSE_TABLE[arrMorse.join('')];
     }

    });
 
    return arr.join('');
  
}

module.exports = {
    decode
}
