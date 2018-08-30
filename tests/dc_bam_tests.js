'use strict';
var tap = require('tap');
process.env.APPLICATION_NAME = 'only_4_unittest';
process.env.DC_TEST_MODE = true;
process.env.KNJ_LOG_LEVEL = 'all';
process.env.KNJ_LOG_TO_FILE = true;
process.env.KNJ_CONFIG_FILE = './tests/test-config.json';
process.env.KNJ_ENABLE_DEEPDIVE = true;
process.env.KNJ_ENABLE_TT = true;
process.env.KNJ_DISABLE_METHODTRACE = false;
process.env.LOGS_DEBUG = true;
process.env.KNJ_ENABLE_PROFILING = true;
process.env.KNJ_ENABLE_METHODTRACE = true;
process.env.KNJ_RESTCLIENT_MAX_RETRY = 0;
// Base64 for http://fortaptestonly.ignore
process.env.IBM_APM_INGRESS_URL =
    'aHR0cDovL2ZvcnRhcHRlc3Rvbmx5Lmlnbm9yZQ==';

process.env.IBM_APM_SERVER_URL =
    'aHR0cDovL2ZvcnRhcHRlc3Rvbmx5Lmlnbm9yZQ==';
process.env.MONITORING_SERVER_TYPE = 'BAM';

var dc = require('../../ibmapm');

var bamplugin = require('../lib/plugins/BAMPlugin');
var biplugin = require('../lib/plugins/BIPlugin');
var sendqueue = require('../lib/restclient/sender-queue');
var icpcontr = require('../lib/tools/icpcontroller');

function endUT() {
    // process.exit(0);
    dc.stopDC();
    bamplugin.stop();
    biplugin.stop();
    sendqueue.stopQueue();
    icpcontr.stop();
}
setTimeout(endUT, 10000);
tap.tearDown(function() {
    // dc.stopDC();
});
tap.test('Init the Node.js DC running on BAM mode.', function(t) {
    t.end();
});
