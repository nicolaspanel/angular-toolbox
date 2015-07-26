'use strict';

(function() {
    describe('Format Spec', function() {
        beforeEach(module('angular-toolbox'));

        describe('service', function () {
            var format;
            beforeEach(inject(function(_format_) {
                format = _format_;
            }));
            it('should support numerical placeholder', function() {
                expect(format('The name is {1}. {0} {1}.', 'James', 'Bond')).toBe('The name is Bond. James Bond.');
            });
            it('should support implicit placeholder', function() {
                expect(format('{}, you have {} unread message{}', 'Steve', 1)).toBe('Steve, you have 1 unread message');
            });
            it('should support dot notation to reference object properties', function() {
                expect(format('{0.firstName} {0.lastName}', {firstName: 'Bobby', lastName: 'Fischer'})).toBe('Bobby Fischer');
            });
            it('should support object properties', function() {
                expect(format('{firstName} {lastName}', {firstName: 'Bobby', lastName: 'Fischer'})).toBe('Bobby Fischer');
            });
        });

        describe('filter', function () {
            var scope, $compile;
            beforeEach(inject(function($rootScope, _$compile_) {
                scope = $rootScope.$new();
                $compile = _$compile_;
                angular.extend(scope, {
                    user:  {firstName: 'Bobby', lastName: 'Fischer'}
                });
            }));

            it('should support numerical placeholder', function () {
                var element = angular.element(
                    '<span ng-bind="\'The name is {1}. {0} {1}.\' | format:\'James\':\'Bond\'"></span>'
                );
                element = $compile(element)(scope);
                scope.$digest();  // call watchers
                expect(element.text()).toBe('The name is Bond. James Bond.');
            });

            it('should support dot notation to reference object properties', function() {
                var element = angular.element('<span ng-bind="\'{0.firstName} {0.lastName}\' | format:user"></span>');
                element = $compile(element)(scope);
                scope.$digest();  // call watchers
                expect(element.text()).toBe('Bobby Fischer');
            });

            it('should support object properties', function() {
                var element = angular.element('<span ng-bind="\'{firstName} {lastName}\' | format:user"></span>');
                element = $compile(element)(scope);
                scope.$digest();  // call watchers
                expect(element.text()).toBe('Bobby Fischer');
            });

            it('should support implicit placeholder', function() {
                var element = angular.element('<span ng-bind="\'{}, you have {} unread message{}\' | format:\'Steve\':1"></span>');
                element = $compile(element)(scope);
                scope.$digest();  // call watchers
                expect(element.text()).toBe('Steve, you have 1 unread message');
            });
        });


    });
}());