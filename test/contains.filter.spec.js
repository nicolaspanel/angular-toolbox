'use strict';

(function() {
    describe('contains filter Spec', function() {
        // Initialize global variables
        var containsFilter;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_containsFilter_) {
            containsFilter = _containsFilter_;
        }));

        it('should be testable', inject(function() {
            expect(containsFilter).toBeDefined();
        }));

        it('should be return true if value in list', inject(function() {
            expect(containsFilter(_.range(5), 4)).toBeTruthy();
        }));

        it('should be return false if value NOT in list', inject(function() {
            expect(containsFilter(_.range(4), 4)).toBeFalsy();
        }));
    });
}());