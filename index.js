#!/usr/bin/env node

var exec = require('simple-subprocess')
  , prompt = require('prompt');

// TODO make this a menu
//      check what is used for the menu in workshopper et al.


// Items to deal with at the start of a work day:

var schema = {
  properties: {
    kinit: {
      description: 'Run kinit?',
      required: true,
      pattern: /^([yY]([eE][sS])?|[nN][oO]?)$/,
      message: 'y/N'
    }
  }
};

prompt.start();
prompt.get(schema, function (err, result) {
  if (result.kinit.charAt(0).toLowerCase() === 'y') {
    console.log('Running kinit:');
    // TODO if it fails, keep running or offering to run
    //      until it is successful.
    exec('kinit').on('exit', function () {
      nextBit();
    });
  } else {
    nextBit();
  }
});

function nextBit () {
  console.log('\n    All done  :)\n');
}