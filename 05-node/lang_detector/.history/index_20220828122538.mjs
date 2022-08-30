import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
var langs = require('langs');
try {
  let code = franc(process.argv[2]);
  console.log(code);
  console.log(langs.where('1',code));
} catch (e) {
  console.log(e);
}