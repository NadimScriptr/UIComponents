var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {		
  return $window._; // assumes underscore has already been loaded on the page		
}]);

angular.module('DashboardBuilder', ['underscore', "Map", "Message", "xeditable", 'Publisher', 'toggle-switch', 'ui.bootstrap', 'ngRoute', 'schemaForm', 'slickCarousel', 'ngAnimate', 'ngSanitize', "WsClient", "HttpClient", "Chart", 'gridster','DashboardBuilder', 'Gauge', 'Speedometer', 'Odometer', 'SearchBox', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'Thermometer', 'ProgressBar']);