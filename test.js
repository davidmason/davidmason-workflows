var child_process = require('child_process'),
    should = require('should');

describe('davidmason-workflow', function () {
  describe('printing', function () {
    it('Should remind me to run kinit', function () {
      var program = child_process.spawn('./index.js', []);
      program.stdout.on('data', function (data) {
        data.toString().should.eql('Make sure you are signed in to kerberos:\n');
      });
      program.on('exit', function (exitCode) {
        exitCode.should.eql(0);
      });
      program.on('error', function (err) {
        should(err).not.exist;
      });
    });
  });
});