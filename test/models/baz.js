/*global describe, it, before, beforeEach, YUI, expect, after */
'use strict';
(function () {
    describe('baz', function () {
        var Y, formatter;
        before(function (done) {
            Y = YUI({
                modules: {
                    'baz {
                        fullpath: 'baz',
                        requires: ['base']
                    }
                }
            }).use([
                    'baz'
                ], function () {
                    done();
                }
            );
        });

        beforeEach(function (done) {
            done();
        });

        it('should instantiate the bar class', function (done) {
            done();
        });

        after(function() {
            Y = undefined;
        });

    });
})();


