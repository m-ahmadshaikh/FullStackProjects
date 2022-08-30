import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc, francAll } from 'franc';
const ISO6391 = require('iso-639-1');
try {
  let code = francAll(process.argv[2], { minLength: 3 });

  if (code[0][0] == 'und') {
    console.log('CANT DETECT LANGUAGE');
  } else {
    // let s =
    //   langs.where('3', code[0][0]) ||
    //   langs.where('3', code[1][0]) ||
    //   langs.where('3', code[2][0]) ||
    //   'Cant Detect language';
    console.log(code[0])
    console.log(ISO6391.getName(code[0][0]));
  }
} catch (e) {
  console.log(e);
}