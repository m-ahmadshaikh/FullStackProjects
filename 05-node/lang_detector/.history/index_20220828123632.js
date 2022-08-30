import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc, francAll } from 'franc';
var langs = require('langs');
try {
  let code = francAll(process.argv[2], { minLength: 3 });
    console.log(code);
  if (code == 'und') {
    throw Error(''CANT DETECT LANGUAGE')
    console.log();
  } else {
    let s = (langs.where('2', code[0][0]) || langs.where('2', code[1][0] )|| langs.where('2', code[2][0] ));
    console.log(s.name);
  }
} catch (e) {
  console.log(e);
}
