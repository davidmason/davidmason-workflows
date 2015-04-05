#!/usr/bin/env node

var exec = require('simple-subprocess');

// TODO make this a menu
//      check what is used for the menu in workshopper et al.


// Items to deal with at the start of a work day:

console.log('Make sure you are signed in to kerberos:');
exec('kinit').on('exit', function () {
  console.log('\n    All done  :)\n');
});
