'use strict';

(function() {
	describe('some filter Spec', function() {
		// Initialize global variables
		var someFilter;
        var users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_someFilter_) {
            someFilter = _someFilter_;
		}));

		it('should be testable', inject(function() {
			expect(someFilter).toBeDefined();
		}));

		it('should returns true if some of the values in the list pass the predicate', function () {
			expect(someFilter([null, 0, 'yes', false])).toBeTruthy();
			expect(someFilter(users, 'active', false)).toBeTruthy();
			expect(someFilter(users, 'active')).toBeTruthy();
		});

		it('should returns false if none of the values in the list pass the predicate', function () {
			expect(someFilter([null, 0, false])).toBeFalsy();
			expect(someFilter(users, { 'user': 'barney', 'active': false })).toBeFalsy();
		});

        describe('any alias', function () {
            var anyFilter;

            beforeEach(inject(function(_anyFilter_) {
                anyFilter = _anyFilter_;
            }));

            it('should be an alias', inject(function() {
                expect(anyFilter).toBe(someFilter);
            }));
        });
	});
}());