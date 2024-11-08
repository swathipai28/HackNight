// const { PythonShell } = require('python-shell');

// exports.convertToBraille = (text) => {
//   return new Promise((resolve, reject) => {
//     PythonShell.run('python-scripts/braille_converter.py', { args: [text] }, (err, results) => {
//       if (err) return reject(err);
//       resolve(results[0]);
//     });
//   });
// };

// Example Braille conversion utility
const brailleAlphabet = {
    a: '⠁', b: '⠃', c: '⠉', d: '⠙', e: '⠑', f: '⠋', g: '⠛', h: '⠓', i: '⠊', j: '⠚',
    k: '⠅', l: '⠇', m: '⠍', n: '⠝', o: '⠕', p: '⠏', q: '⠟', r: '⠗', s: '⠎', t: '⠞',
    u: '⠥', v: '⠧', w: '⠺', x: '⠭', y: '⠽', z: '⠵', ' ': '⠄', '.': '⠲', ',': '⠂',
    '?': '⠦', '!': '⠖', '-': '⠤', '0': '⠴', '1': '⠁', '2': '⠃', '3': '⠉', '4': '⠙',
    '5': '⠑', '6': '⠋', '7': '⠛', '8': '⠓', '9': '⠊'
  };
  
  // Function to convert text to Braille
  exports.convertToBraille = (text) => {
    return text
      .toLowerCase() // Make the text lowercase
      .split('') // Split the text into individual characters
      .map(char => brailleAlphabet[char] || char) // Replace with Braille or leave unchanged
      .join(''); // Join the characters back together
  };
  // module.exports = { convertToBraille };