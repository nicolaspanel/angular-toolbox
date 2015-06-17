'use strict';

(function() {
	describe('any filter Spec', function() {
		// Initialize global variables
		var anyFilter, someFilter;
        var users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_anyFilter_, _someFilter_) {
            anyFilter = _anyFilter_;
            someFilter = _someFilter_;
		}));

		it('should be testable', inject(function() {
			expect(anyFilter).toBeDefined();
		}));
		it('should have "some" alias', inject(function() {
			expect(anyFilter).toBe(someFilter);
		}));

		it('should returns true if any of the values in the list pass the predicate', function () {
			expect(anyFilter([null, 0, 'yes', false])).toBeTruthy();
			expect(anyFilter(users, 'active', false)).toBeTruthy();
			expect(anyFilter(users, 'active')).toBeTruthy();
		});
		it('should returns false if none of the values in the list pass the predicate', function () {
			expect(anyFilter([null, 0, false])).toBeFalsy();
			expect(anyFilter(users, { 'user': 'barney', 'active': false })).toBeFalsy();
		});
	});
}());