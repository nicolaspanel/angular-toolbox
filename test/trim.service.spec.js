'use strict';

(function() {
    describe('Trim Service Spec', function() {
        // Initialize global variables
        var trimService;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(trim) {
            trimService = trim;
        }));

        it('should do some service test', inject(function() {
            // The test logic
            expect(trimService('   lorem ipsum   ')).toBe('lorem ipsum');
        }));
    });
}());