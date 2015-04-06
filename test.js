var child_process = require('child_process'),
    should = require('should'),
    stripAnsi = require('strip-ansi');

describe('davidmason-workflow', function () {
  describe('printing', function () {
    it('Should ask to run kinit', function (done) {
      var program = child_process.spawn('./index.js', []);

      var whichData = 0;

      program.stdout.on('data', function (data) {
        if (whichData === 0) {
          stripAnsi(data.toString()).should.eql('prompt: Run kinit?:  ');
          // Select 'no'
          program.stdin.write('n\n', 'utf8');
        }

        if (whichData === 1) {
          data.toString().should.eql('\n    All done  :)\n\n');
          done();
        }

        whichData++;
      });


      // TODO None of the following events are fired. Figure out why.

      // Test is done on normal exit, or error

      // program.on('exit', function (exitCode) {
      //   exitCode.should.eql(0);
      //   done();
      // });
      // program.on('close', function (exitCode) {
      //   exitCode.should.eql(0);
      //   done();
      // });
      // program.on('disconnect', function () {
      //   console.log('disconnect event');
      //   done();
      // });
      // program.on('error', function (err) {
      //   should(err).not.exist;
      //   done();
      // });
    });
  });
});