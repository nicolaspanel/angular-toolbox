'use strict';

(function() {
	describe('any filter Spec', function() {
		// Initialize global variables
		var anyFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_anyFilter_) {
            anyFilter = _anyFilter_;
		}));

		it('should be testable', inject(function() {
			expect(anyFilter).toBeDefined();
		}));

		it('should returns true if any of the values in the list pass the predicate', function () {
			expect(anyFilter([null, 0, 'yes', false])).toBeTruthy();
		});
		it('should returns false if none of the values in the list pass the predicate', function () {
			expect(anyFilter([null, 0, false])).toBeFalsy();
		});
	});
}());