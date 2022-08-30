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
    console.log(langs.where('2', code));
  }
} catch (e) {
  console.log(e);
}
