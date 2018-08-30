'use strict';
process.env.DC_TEST_MODE = true;
process.env.MONITORING_SERVER_TYPE = 'BAM';
process.env.KNJ_LOG_LEVEL = 'all';
process.env.KNJ_LOG_TO_CONSOLE = true;
var tap = require('tap');
var k8sutil = require('../lib/tools/k8sutil');

tap.plan(1);
tap.tearDown(function() {

    console.log('End of k8sutil.');
});
tap.test('k8sutil.', function(t) {
    var isicp = k8sutil.isICP();
    t.ok(!isicp, 'Is not a ICp env.');

    k8sutil.getIngressUrl();
    k8sutil.getContainerID();
    k8sutil.getContainerDetail();
    k8sutil.getContainerName();
    k8sutil.getDeployName();
    k8sutil.getNamespace();
    k8sutil.getNodeIPs();
    k8sutil.getNodeName();
    k8sutil.getNodes();
    k8sutil.getPodDetail();
    k8sutil.getPodGenerateName();
    k8sutil.getPodID();
    k8sutil.getServiceID();
    k8sutil.getServiceName();
    k8sutil.getServicesConn();

    var podname = k8sutil.getPodName();
    t.ok(podname, 'podname is OK.');

    t.end();
});
