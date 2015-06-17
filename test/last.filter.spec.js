'use strict';

(function() {
	describe('last filter Spec', function() {
		// Initialize global variables
		var lastFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_lastFilter_) {
            lastFilter = _lastFilter_;
		}));

		it('should be testable', inject(function() {
			expect(lastFilter).toBeDefined();
		}));
		it('should return the last element of the array', inject(function() {
			expect(lastFilter([1, 2, 3])).toEqual(3);
		}));
		it('should return undefined if array is empty', inject(function() {
			expect(lastFilter([])).toBeUndefined();
		}));
	});
}());