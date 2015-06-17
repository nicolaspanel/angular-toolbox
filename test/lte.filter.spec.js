'use strict';

(function() {
	describe('lte filter Spec', function() {
		// Initialize global variables
		var lteFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_lteFilter_) {
            lteFilter = _lteFilter_;
		}));

		it('should be testable', inject(function() {
			expect(lteFilter).toBeDefined();
		}));

		it('should return false if NOT lower than or equal', inject(function() {
			expect(lteFilter(2, 1)).toBeFalsy();
		}));
		it('should return true if lower than or equal', inject(function() {
			expect(lteFilter(1, 2)).toBeTruthy();
			expect(lteFilter(1, 1)).toBeTruthy();
		}));
	});
}());