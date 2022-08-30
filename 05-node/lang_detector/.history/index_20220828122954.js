import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
var langs = require('langs');
try {
  let code = franc(process.argv[2]);
  if(code != 'und'){
    console.log('CANT DETECT LANGUAGE')
  }
  else{
  console.log(langs.where('2', code).name);
} catch (e) {
  console.log(e);
}
