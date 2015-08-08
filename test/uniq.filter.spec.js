'use strict';

(function() {
    describe('uniq filter Spec', function() {
        // Initialize global variables
        var uniqFilter;


        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_uniqFilter_) {
            uniqFilter = _uniqFilter_;
        }));

        it('should be testable', inject(function() {
            expect(uniqFilter).toBeDefined();
        }));

        it('should returns the property values', inject(function() {
            expect(uniqFilter([1, 2, 1, 4, 1, 3])).toEqual([1, 2, 4, 3]);
        }));

        describe('unique alias', function () {
            var uniqueFilter;

            beforeEach(inject(function(_uniqueFilter_) {
                uniqueFilter = _uniqueFilter_;
            }));

            it('should be an alias', inject(function() {
                expect(uniqueFilter).toBe(uniqFilter);
            }));
        });
    });
}());