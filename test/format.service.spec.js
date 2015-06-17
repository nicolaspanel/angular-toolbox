'use strict';

(function() {
    describe('Format Service Spec', function() {
        // Initialize global variables
        var format;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_format_) {
            format = _format_;
        }));

        it('should support numerical placeholder', function() {
            expect(format('The name\'s {1}. {0} {1}.', 'James', 'Bond')).toBe('The name\'s Bond. James Bond.');
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
}());