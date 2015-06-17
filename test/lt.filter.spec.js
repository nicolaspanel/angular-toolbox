'use strict';

(function() {
	describe('lt filter Spec', function() {
		// Initialize global variables
		var ltFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_ltFilter_) {
            ltFilter = _ltFilter_;
		}));

		it('should be testable', inject(function() {
			expect(ltFilter).toBeDefined();
		}));

		it('should return false if NOT lower than', inject(function() {
			expect(ltFilter(2, 1)).toBeFalsy();
			expect(ltFilter(1, 1)).toBeFalsy();
		}));
		it('should return true if lower than', inject(function() {
			expect(ltFilter(1, 2)).toBeTruthy();
		}));
	});
}());