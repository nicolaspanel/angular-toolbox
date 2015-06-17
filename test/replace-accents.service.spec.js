'use strict';

(function() {
    describe('ReplaceAccents Service Spec', function() {
        // Initialize global variables
        var ReplaceAccentsService;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(replaceAccents) {
            ReplaceAccentsService = replaceAccents;
        }));

        it('should replaces all accented chars with regular ones', inject(function() {
            // The test logic
            expect(ReplaceAccentsService('lõrêm ípsûm')).toBe('lorem ipsum');
        }));
    });
}());