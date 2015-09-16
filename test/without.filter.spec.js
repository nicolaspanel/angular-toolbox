'use strict';

(function() {
    describe('without filter Spec', function() {
        // Initialize global variables
        var withoutFilter;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_withoutFilter_) {
            withoutFilter = _withoutFilter_;
        }));

        it('should filter true examples', inject(function() {
            expect(withoutFilter([null, true, 0, false], 0)).toEqual([null, true, false]);
        }));

    });
}());