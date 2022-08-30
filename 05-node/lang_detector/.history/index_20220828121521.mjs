import { createRequire } from "module";
const require = createRequire(import.meta.url);
import {franc} from 'franc';
var langs = require('langs');

franc(process.argv[2])
console.log();

