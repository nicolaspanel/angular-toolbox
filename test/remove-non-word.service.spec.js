'use strict';

(function() {
    describe('RemoveNonWord Service Spec', function() {
        // Initialize global variables
        var removeNonWord;

        beforeEach(module('angular-toolbox'));

        beforeEach(inject(function(_removeNonWord_) {
            removeNonWord = _removeNonWord_;
        }));

        it('should do some service test', inject(function() {
            // The test logic
            expect(removeNonWord('lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum')).toBe('lorem - ipsum');
        }));
    });
}());