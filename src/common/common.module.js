(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://paul4589-mod-5b.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
