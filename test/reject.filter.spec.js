'use strict';

(function() {
    describe('reject filter Spec', function() {
        // Initialize global variables
        var rejectFilter;

        var users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false },
            { 'user': 'bob',   'active': 'true' }
        ];

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_rejectFilter_) {
            rejectFilter = _rejectFilter_;
        }));

        it('should filter true examples', inject(function() {
            expect(rejectFilter([null, true, false]).length).toBe(2);
        }));

        it('should filter examples according to predicate', inject(function() {
            expect(rejectFilter(users, 'active').length).toBe(1);
        }));

        it('should filter examples according to filters', inject(function() {
            expect(rejectFilter(users, {active: true}).length).toBe(2);
        }));
    });
}());