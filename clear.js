const fs = require('fs');

try {
  if (fs.existsSync('dist')) {
    fs.rmdirSync('dist', { recursive: true });
    fs.mkdirSync('dist');
  }
} catch (err) {
  console.log(err);
}
