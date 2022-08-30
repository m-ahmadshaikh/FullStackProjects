import { franc } from 'franc';
import find from 'lang-codes';
try {
  let code = francAll(process.argv[2], { minLength: 3 });

  if (code[0][0] == 'und') {
    console.log('CANT DETECT LANGUAGE');
  } else {
    console.log(find(code[0][0], { props: 'name' }));
  }
} catch (e) {
  console.log(e);
}
