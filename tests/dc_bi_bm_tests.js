'use strict';
var tap = require('tap');
process.env.APPLICATION_NAME = 'only_4_unittest';
process.env.DC_TEST_MODE = true;
process.env.KNJ_LOG_LEVEL = 'all';
process.env.KNJ_LOG_TO_FILE = true;
// process.env.KNJ_CONFIG_FILE = './test-config.json';
process.env.KNJ_ENABLE_DEEPDIVE = true;
process.env.KNJ_ENABLE_TT = true;
process.env.KNJ_DISABLE_METHODTRACE = false;
process.env.LOGS_DEBUG = true;
process.env.KNJ_ENABLE_PROFILING = true;
process.env.KNJ_ENABLE_METHODTRACE = true;
process.env.KNJ_RESTCLIENT_MAX_RETRY = 0;
// Base64 for http://fortaptestonly.ignore
// process.env.IBM_APM_INGRESS_URL =
//     'aHR0cDovL2ZvcnRhcHRlc3Rvbmx5Lmlnbm9yZQ==';

process.env.IBM_APM_SERVER_URL =
    'aHR0cDovL2ZvcnRhcHRlc3Rvbmx5Lmlnbm9yZQ==';
process.env.MONITORING_SERVER_TYPE = 'BI';
process.env.VCAP_APPLICATION = JSON.stringify({
    application_id: 'cdeb8f1d-e838-4239-9e69-44384f3a2ac0',
    application_name: 'app-health-test',
    application_uris: ['app-health-test.stage1.mybluemix.net'],
    application_version: '7b29c78f-02a4-4b4c-b4a4-dbce59820301',
    cf_api: 'https://api.stage1.ng.bluemix.net',
    host: '0.0.0.0',
    instance_id: 'afc92fae-6f55-49cc-541f-8df1',
    instance_index: 0,
    limits: { disk: 256, fds: 16384, mem: 256 },
    name: 'app-health-test',
    port: 8080,
    space_id: '410323d5-0ffc-49d2-b8cd-29150644dbc2',
    space_name: 'dev',
    uris: ['app-health-test.stage1.mybluemix.net'],
    version: '7b29c78f-02a4-4b4c-b4a4-dbce59820301'
});
process.env.VCAP_SERVICES = JSON.stringify({
    'AvailabilityMonitoring-avt': [{
        credentials: {
            cred_url: 'https://perfbroker-avt.stage1.ng.bluemix.net',
            token: 'CjtNXouUPpKsAF0h2YWx10oaJCcdeqxPGfNEI6bkWPzRjMG0KFDUO/' +
                'lEeyXfJMEYGHa+yKNG6zQVKq5dsTGwSOzbX5sQPy0UjEt9qyUEln8='
        },
        syslog_drain_url: undefined,
        volume_mounts: [

        ],
        label: 'AvailabilityMonitoring-AVT',
        provider: undefined,
        plan: 'Lite',
        name: 'Availability Monitoring AVT-Dev',
        tags: [
            'ibm_created',
            'bluemix_extensions',
            'dev_ops',
            'lite'
        ]
    }]
});
var dc = require('../../ibmapm');

var bamplugin = require('../lib/plugins/BAMPlugin');
var biplugin = require('../lib/plugins/BIPlugin');
var sendqueue = require('../lib/restclient/sender-queue');
var icpcontr = require('../lib/tools/icpcontroller');

tap.tearDown(function() {
    dc.stopDC();
    bamplugin.stop();
    biplugin.stop();
    sendqueue.stopQueue();
    icpcontr.stop();
});
tap.test('Init the Node.js DC running on BI Bluemix mode.', function(t) {
    t.end();
});
