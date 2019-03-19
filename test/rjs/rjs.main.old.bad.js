/**
 * This is a sample file that broke with the optimizer.
 */
require(['../../src/ua-parser.old.js'], function (uaParser) {
    'use strict';
    // Expected: to be the correct object. Works on global define & non-built version
    // Result: undefined in built version.
    console.log('uaParser: ', uaParser);
});