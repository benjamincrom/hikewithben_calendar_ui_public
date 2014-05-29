'use strict';

/* App */
var hikeWithBenApp = angular.module('hikeWithBenApp', [
    'ui.bootstrap',
    'ngSanitize',
    'ngResource',
]);

/* Config */
hikeWithBenApp.config(function($locationProvider){
    $locationProvider.html5Mode(true).hashPrefix('!');
});

/* Controllers */
hikeWithBenApp.controller('HikeListCtrl',
    function getHikeList($scope, $http) {
        $http.get('https://hikewithben.appspot.com/_ah/api/hikewithben/v1/hike_list').
            success(function(data) {
                $scope.hike_list = data.hike_list;
            });
    } 
);

hikeWithBenApp.controller('DisplayHikeCtrl',
    function DisplayHikeCtrl($scope, $http, $location) {
        var link_prefix = "https://hikewithben.appspot.com/_ah/api/hikewithben/v1/hike_display/";
        var link = link_prefix.concat($location.search().hike_id)
        $http.get(link).success(function(data) {
            $scope.hike = data;
        });
    }
);

/* Directives */
hikeWithBenApp.directive('loadingContainer', function () {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var loadingLayer = angular.element('<div class="loading"></div>');
            element.append(loadingLayer);
            element.addClass('loading-container');
            scope.$watch(attrs.loadingContainer, function(value) {
                loadingLayer.toggleClass('ng-hide', !value);
            });
        }
    };
});