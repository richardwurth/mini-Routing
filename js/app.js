angular.module('miniRouting', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'home'
  })
  .state('settings', {
    url: '/settings',
    templateUrl: 'js/settings/settingsTmpl.html',
    controller: 'settings'})
    .state('products', {
      url: '/products/:id',
      templateUrl: 'js/products/productTmpl.html',
      controller: 'products'});

      $urlRouterProvider
      .otherwise('/');

    });
