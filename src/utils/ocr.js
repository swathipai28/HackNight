const { PythonShell } = require('python-shell');

exports.extractTextFromImage = (imagePath) => {
  return new Promise((resolve, reject) => {
    PythonShell.run('python-scripts/ocr_processing.py', { args: [imagePath] }, (err, results) => {
      if (err) return reject(err);
      resolve(results[0]);
    });
  });
};
