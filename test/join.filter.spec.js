'use strict';

(function() {
	describe('join filter Spec', function() {
		// Initialize global variables
		var joinFilter;

		beforeEach(module('angular-toolbox'));

		beforeEach(inject(function(_joinFilter_) {
            joinFilter = _joinFilter_;
		}));

		it('should be testable', inject(function() {
			expect(joinFilter).toBeDefined();
		}));
		it('should join using ", " by default', inject(function() {
			expect(joinFilter([0,1,2])).toEqual('0, 1, 2');
		}));
		it('should accept custom separator', inject(function() {
			expect(joinFilter([0,1,2], '.')).toEqual('0.1.2');
		}));
	});
}());