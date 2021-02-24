const fs = require('fs');

const str1 = `
{
    "type": "module"
}
`;

const str2 = `
{
    "type": "commonjs"
}
`;

try {
  fs.writeFileSync('dist/mjs/package.json', str1, 'utf8');
  fs.writeFileSync('dist/cjs/package.json', str2, 'utf8');
} catch (error) {
  console.log(error);
}
