'use strict';

(function() {
    describe('cut filter Spec', function() {
        // Initialize global variables
        var cutFilter, scope, $compile;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function($rootScope, _cutFilter_, _$compile_) {
            cutFilter = _cutFilter_;
            scope = $rootScope.$new();
            $compile = _$compile_;
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
        it('should be bindable', function () {
            scope.text = 'abcdefghijklmnopqrstuvwxyz';
            var element = angular.element('<span ng-bind="text | cut:5"></span>');
            element = $compile(element)(scope);
            scope.$digest();  // call watchers
            expect(element.text()).toBe('abcde…');
        });
    });
}());