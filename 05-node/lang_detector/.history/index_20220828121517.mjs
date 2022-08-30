import { createRequire } from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc';
var langs = require('langs');

franc()
console.log(process.argv[2]);

