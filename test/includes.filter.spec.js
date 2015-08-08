'use strict';

(function() {
    describe('includes filter Spec', function() {
        // Initialize global variables
        var includesFilter;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_includesFilter_) {
            includesFilter = _includesFilter_;
        }));

        it('should be testable', inject(function() {
            expect(includesFilter).toBeDefined();
        }));

        it('should be return true if value in list', inject(function() {
            expect(includesFilter(_.range(5), 4)).toBeTruthy();
        }));

        it('should be return false if value NOT in list', inject(function() {
            expect(includesFilter(_.range(4), 4)).toBeFalsy();
        }));

        describe('contains alias', function () {
            var containsFilter;

            beforeEach(inject(function(_containsFilter_) {
                containsFilter = _containsFilter_;
            }));

            it('should be an alias', inject(function() {
                expect(containsFilter).toBe(includesFilter);
            }));
        });
        
        describe('include alias', function () {
            var includeFilter;

            beforeEach(inject(function(_includeFilter_) {
                includeFilter = _includeFilter_;
            }));

            it('should be an alias', inject(function() {
                expect(includeFilter).toBe(includesFilter);
            }));
        });
    });
}());