'use strict';

(function() {
	describe('size filter Spec', function() {
		// Initialize global variables
		var sizeFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_sizeFilter_) {
            sizeFilter = _sizeFilter_;
		}));

		it('should be testable', inject(function() {
			expect(sizeFilter).toBeDefined();
		}));

		it('should return the number of values in the object', inject(function() {
			expect(sizeFilter({one: 1, two: 2, three: 3})).toEqual(3);
		}));

		it('should return the number of values in the object', inject(function() {
			expect(sizeFilter([1,2,3])).toEqual(3);
		}));
	});
}());