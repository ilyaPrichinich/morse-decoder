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
        let arrReplace = [];
        let result = [];
            expr.match(/.{10}/g).map(i => {
            if( i === '**********') {
            i = " ";
            }
            arrReplace.push(i.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g,''))
            })
                arrReplace.map(item => {
                    if(item === " ") {
                        result.push(' ')
                    } else {
                        result.push(MORSE_TABLE[item])
                    }
            })
          return result.join('')
} 

module.exports = {
    decode
}