'use strict';

(function() {
	describe('gte filter Spec', function() {
		// Initialize global variables
		var gteFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_gteFilter_) {
            gteFilter = _gteFilter_;
		}));

		it('should be testable', inject(function() {
			expect(gteFilter).toBeDefined();
		}));
		it('should return false if NOT greater than or equal', inject(function() {
			expect(gteFilter(1, 2)).toBeFalsy();
		}));
		it('should return true if  greater than or equal', inject(function() {
			expect(gteFilter(2, 1)).toBeTruthy();
			expect(gteFilter(1, 1)).toBeTruthy();
		}));
	});
}());