'use strict';

(function() {
    describe('slugify directive', function () {
        beforeEach(module('angular-toolbox'));

        var scope, $elt;

        beforeEach(inject(function($rootScope, _$compile_){
            scope = $rootScope.$new();

            angular.extend(scope, {model: {someText: null }});
            var element = angular.element(
                '<form name="form">' +
                '   <input ng-model="model.someText" name="input" slugify />' +
                '</form>');
            $elt = _$compile_(element)(scope);
        }));

        it('should slugify inputs', function(){
            scope.form.input.$setViewValue('loremIpsum dolor spéçïãl chârs');
            scope.$digest(); // call watchers
            expect(scope.model.someText).toEqual('lorem-ipsum-dolor-special-chars');
            expect(scope.form.$valid).toBeTruthy();
        });

        it('should be invalid if slugify ', function(){
            scope.form.input.$setViewValue('...');
            scope.$digest(); // call watchers
            expect(scope.model.someText).toBeUndefined();
            expect(scope.form.$valid).toBeFalsy();
        });
    });
})();