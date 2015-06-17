'use strict';

(function() {
	describe('initial filter Spec', function() {
		// Initialize global variables
		var initialFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_initialFilter_) {
            initialFilter = _initialFilter_;
		}));

		it('should be testable', inject(function() {
			expect(initialFilter).toBeDefined();
		}));
		it('should returns the slice of array', inject(function() {
			expect(initialFilter([1, 2, 3])).toEqual([1,2]);
		}));
	});
}());