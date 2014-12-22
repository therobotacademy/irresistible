/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('toppingApp.controllers',[]).controller('ToppingListController',function($scope,$state,popupService,$window,Topping){

    $scope.toppings=Topping.query(function(data) { 
	$scope.toppings = data.toppings;
    });

    $scope.deleteTopping=function(topping){
        if(popupService.showPopup('Really delete this?')){
            topping.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('ToppingViewController',function($scope,$stateParams,Topping){

    $scope.topping=Topping.get({id:$stateParams.id});

}).controller('ToppingCreateController',function($scope,$state,$stateParams,Topping){

    $scope.topping=new Topping();

    $scope.addTopping=function(){
        $scope.topping.$save(function(){
            $state.go('toppings');
        });
    }

}).controller('ToppingEditController',function($scope,$state,$stateParams,Topping){

    $scope.updateTopping=function(){
        $scope.topping.$update(function(){
            $state.go('toppings');
        });
    };

    $scope.loadTopping=function(){
        $scope.topping=Topping.get({id:$stateParams.id});
    };

    $scope.loadTopping();
});
