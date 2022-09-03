const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const hashPassword = async () => {
  const pass = await bcrypt.hash(
    myPlaintextPassword,
    saltRounds,
    function (err, hash) {
      // Store hash in your password DB.
      return hash;
    }
  );
};
const hash = hashPassword();

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    console
});