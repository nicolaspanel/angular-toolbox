'use strict';

(function() {
    describe('select filter Spec', function() {
        // Initialize global variables
        var selectFilter;

        var users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false },
            { 'user': 'bob',   'active': 'true' }
        ];

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_selectFilter_) {
            selectFilter = _selectFilter_;
        }));

        it('should filter true examples', inject(function() {
            expect(selectFilter([null, true, false]).length).toBe(1);
        }));
        it('should filter examples according to predicate', inject(function() {
            expect(selectFilter(users, 'active').length).toBe(2);
        }));
        it('should filter examples according to filters', inject(function() {
            expect(selectFilter(users, {active: true}).length).toBe(1);
            expect(selectFilter(users, {active: true})[0]).toBe(users[0]);
        }));
    });
}());