'use strict';

(function() {
    describe('Slugify Service Spec', function () {
        // Initialize global variables
        var slugifyService;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function (_slugify_) {
            slugifyService = _slugify_;
        }));

        it('should slugify sentences', inject(function () {
            // The test logic
            expect(slugifyService('loremIpsum dolor spéçïãl chârs', '_')).toBe('lorem_ipsum_dolor_special_chars');
        }));
    });
}());