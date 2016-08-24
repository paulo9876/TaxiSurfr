/* jshint -W117, -W030 */
describe('dashboard routes', function () {
    describe('state', function () {
        var view = 'app/route/route.html';

        beforeEach(function () {
            module('app.route', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function () {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state dashboard to url / ', function () {
            expect($state.href('route', {})).to.equal('/');
        });

        it('should map /dashboard route to dashboard View template', function () {
            expect($state.get('route').templateUrl).to.equal(view);
        });

        it('of dashboard should work with $state.go', function () {
            $state.go('route');
            $rootScope.$apply();
            expect($state.is('route'));
        });
    });
});
