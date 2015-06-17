'use strict';

(function() {
	describe('gt filter Spec', function() {
		// Initialize global variables
		var gtFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_gtFilter_) {
            gtFilter = _gtFilter_;
		}));

		it('should be testable', inject(function() {
			expect(gtFilter).toBeDefined();
		}));
		it('should return false if NOT greater than', inject(function() {
			expect(gtFilter(1, 2)).toBeFalsy();
			expect(gtFilter(1, 1)).toBeFalsy();
		}));
		it('should return true if  greater than', inject(function() {
			expect(gtFilter(2, 1)).toBeTruthy();
		}));
	});
}());