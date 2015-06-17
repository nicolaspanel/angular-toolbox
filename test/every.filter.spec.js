'use strict';

(function() {
	describe('every filter Spec', function() {
		// Initialize global variables
		var everyFilter;
		var users = [
		  { 'user': 'barney', 'active': false },
		  { 'user': 'fred',   'active': false }
		];

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_everyFilter_) {
            everyFilter = _everyFilter_;
		}));

		it('should be testable', inject(function() {
			expect(everyFilter).toBeDefined();
		}));
		it('should returns true if all of the values in the list pass the predicate truth test', inject(function() {
			expect(everyFilter([true, 1, 'yes'])).toBeTruthy();
			expect(everyFilter(users, 'user')).toBeTruthy();
		}));
		it('should returns false if any of the values in the list do NOT pass the predicate truth test', inject(function() {
			expect(everyFilter([true, 1, 'yes', false])).toBeFalsy();
			expect(everyFilter(users, {active: true})).toBeFalsy();
		}));
	});
}());