'use strict';

(function() {
	describe('drop filter Spec', function() {
		// Initialize global variables
		var dropFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_dropFilter_) {
            dropFilter = _dropFilter_;
		}));

		it('should be testable', inject(function() {
			expect(dropFilter).toBeDefined();
		}));
		it('should work as expected', inject(function() {
			expect(dropFilter([1, 2, 3])).toEqual([2, 3]);
			expect(dropFilter([1, 2, 3], 2)).toEqual([3]);
			expect(dropFilter([1, 2, 3], 0)).toEqual([1, 2, 3]);
			expect(dropFilter([1, 2, 3], -1)).toEqual([1, 2, 3]);
		}));

        describe('skip', function () {
            var skipFilter;
            beforeEach(inject(function(_skipFilter_){
                skipFilter = _skipFilter_;
            }));
            it('should be an alias of drop', function () {
                expect(skipFilter).toBe(dropFilter);
            });
        });
	});
}());