'use strict';

(function() {
    describe('UnCamelCase Service Spec', function() {
        // Initialize global variables
        var UnCamelCaseService;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(unCamelCase) {
            UnCamelCaseService = unCamelCase;
        }));

        it('should do some service test', inject(function() {
            // The test logic
            expect(UnCamelCaseService('loremIpsumDolor')).toBe('lorem ipsum dolor');
        }));
    });
}());