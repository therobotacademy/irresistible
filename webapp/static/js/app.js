/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('toppingApp',['ui.router','ngResource','toppingApp.controllers','toppingApp.services']);

angular.module('toppingApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('toppings',{
        url:'/toppings',
        templateUrl:'partials/toppings.html',
        controller:'ToppingListController'
    }).state('viewTopping',{
       url:'/toppings/:id/view',
       templateUrl:'partials/topping-view.html',
       controller:'ToppingViewController'
    }).state('newTopping',{
        url:'/toppings/new',
        templateUrl:'partials/topping-add.html',
        controller:'ToppingCreateController'
    }).state('editTopping',{
        url:'/toppings/:id/edit',
        templateUrl:'partials/topping-edit.html',
        controller:'ToppingEditController'
    });
}).run(function($state){
   $state.go('toppings');
});
