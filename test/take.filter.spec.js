'use strict';

(function() {
	describe('take filter Spec', function() {
		// Initialize global variables
		var takeFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_takeFilter_) {
            takeFilter = _takeFilter_;
		}));

		it('should be testable', inject(function() {
			expect(takeFilter).toBeDefined();
		}));

		it('should returns the first element of an array', inject(function() {
			expect(takeFilter([5, 4, 3, 2, 1])).toEqual([5]);
		}));
        it('should return undefined if array is empty', function () {
            expect(takeFilter([])).toEqual([]);
        });

	});
}());