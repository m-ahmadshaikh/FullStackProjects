import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
var langs = require('langs');
try {
  console.log(franc(process.argv[2].toString()));
} catch (e) {
  console.log(e);
}
