'use strict';

(function() {
    describe('slugify directive', function () {
        beforeEach(module('angular-toolbox'));

        var scope, $compile;

        beforeEach(inject(function($rootScope, _$compile_){
            scope = $rootScope.$new();
            $compile = _$compile_;
        }));

        it('should slugify inputs', function(){
            angular.extend(scope, {model: {someText: null }});
            var element = angular.element(
                '<form name="form">' +
                '   <input ng-model="model.someText" name="input" slugify />' +
                '</form>');
            $compile(element)(scope);
            scope.form.input.$setViewValue('loremIpsum dolor spéçïãl chârs');
            scope.$digest(); // call watchers
            expect(scope.model.someText).toEqual('lorem-ipsum-dolor-special-chars');
            expect(scope.form.$valid).toBeTruthy();
        });
    });
})();