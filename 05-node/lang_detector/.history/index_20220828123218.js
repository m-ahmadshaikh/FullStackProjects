import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc, francAll } from 'franc';
var langs = require('langs');
try {
  let code = francAll(process.argv[2], { minLength: 3 });
  console.log(code);
  if (code == 'und') {
    console.log('CANT DETECT LANGUAGE');
  } else {
    langs.where('2', code) || langs.where('2', code[1])
    console.log();
  }
} catch (e) {
  console.log(e);
}
