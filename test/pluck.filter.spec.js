'use strict';

(function() {
	describe('pluck filter Spec', function() {
		// Initialize global variables
		var pluckFilter;
		var users = [{ 'user': 'barney', 'age': 36 },
					 { 'user': 'fred',   'age': 40 }];


		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_pluckFilter_) {
            pluckFilter = _pluckFilter_;
		}));

		it('should be testable', inject(function() {
			expect(pluckFilter).toBeDefined();
		}));

		it('should returns the property values', inject(function() {
			expect(pluckFilter(users, 'user')).toEqual(['barney', 'fred']);
			expect(pluckFilter(users, 'age')).toEqual([36, 40]);
		}));

	});
}());