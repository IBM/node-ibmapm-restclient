'use strict';
process.env.DC_TEST_MODE = true;
process.env.MONITORING_SERVER_TYPE = 'BAM';
process.env.KNJ_LOG_LEVEL = 'all';
process.env.KNJ_LOG_TO_CONSOLE = false;
var tap = require('tap');
var cryptoutil = require('../lib/plugins/cryptoutil');

tap.plan(1);
tap.tearDown(function() {
    console.log('End of cryptoutil.');
});
tap.test('cryptoutil.', function(t) {
    cryptoutil.initkey('54c1bc15-7e8b-4286-b3ef-ff458f8f1108');

    var obf = cryptoutil.obfuscate('password');
    t.equals('sJ06PLUZcyYL1HB5QQFL2g==', obf);
    var unobf = cryptoutil.unobfuscate(obf);
    t.equals('password', unobf);
    t.end();
});
