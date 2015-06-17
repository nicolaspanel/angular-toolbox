'use strict';

(function() {
    describe('safe filter Spec', function() {
        // Initialize global variables
        var safeFilter, scope, $compile;
        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function($rootScope, _safeFilter_, _$compile_) {
            safeFilter = _safeFilter_;
            scope = $rootScope.$new();
            $compile = _$compile_;
        }));

        it('should be testable', inject(function() {
            expect(safeFilter).toBeDefined();
        }));

        it('should returns safe html', function () {
            scope.html = '<b>Hello world&nbsp;!</b>';
            var element = angular.element('<span ng-bind-html="html | safe"></span>');
            element = $compile(element)(scope);
            scope.$digest();  // call watchers
            expect(element.html()).toBe(scope.html);
        });
    });
}());