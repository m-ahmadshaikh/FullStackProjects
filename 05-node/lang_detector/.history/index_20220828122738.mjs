import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
var langs = require('langs');
try {
  let code = franc(process.argv[2]);
  console.log(franc);
//   console.log(langs.where('2',code));
} catch (e) {
  console.log(e);
}
