'use strict';

(function() {
    describe('cut filter Spec', function() {
        // Initialize global variables
        var cutFilter;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_cutFilter_) {
            cutFilter = _cutFilter_;
        }));

        it('should cut at 20char by default', inject(function() {
            expect(cutFilter('abcdefghijklmnopqrstuvwxyz')).toBe('abcdefghijklmnopqrst…');
        }));
        it('should support different size than 20char', inject(function() {
            expect(cutFilter('abcdefghijkl...', 5)).toBe('abcde…');
        }));
        it('should support custom tail', inject(function() {
            expect(cutFilter('abcdefghijkl...', 5, '.')).toBe('abcde.');
        }));
    });
}());