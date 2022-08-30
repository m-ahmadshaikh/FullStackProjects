import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
var langs = require('langs');

console.log(franc(process.argv[2]));
