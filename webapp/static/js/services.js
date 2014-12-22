/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('toppingApp.services',[]).factory('Topping',function($resource){
    return $resource('/api/v1.0/toppings/:id', {}, {
	query: { method: "GET", isArray: false },
        update: {
            method: 'PUT'
        },
	delete: {
	    method: 'DELETE'
	}
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
