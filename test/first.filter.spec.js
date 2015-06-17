'use strict';

(function() {
	describe('first filter Spec', function() {
		// Initialize global variables
		var firstFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_firstFilter_) {
            firstFilter = _firstFilter_;
		}));

		it('should be testable', inject(function() {
			expect(firstFilter).toBeDefined();
		}));

		it('should returns the first element of an array', inject(function() {
			expect(firstFilter([5, 4, 3, 2, 1])).toEqual(5);
		}));
	});
}());