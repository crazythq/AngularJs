var angular=angular.module("BJDirective", [])
    .directive("ngReadonlyPage", function(){
        return {
            link: function(scope, element, attr) {
            	var modelName = attr.ngReadonlyPage;
            	if(!modelName) 
            		return;
            	scope.$watch(modelName, function (val) {
            		if(val == true) {
            			element.find('select,input').attr('disabled', true);
            		}else if(val == false) {
            			element.find('select,input').removeAttr('disabled');
            		}
            	}, true);
            }
        }
    }).controller("BJCtrl",function($scope) {
    	$scope.viewLogic = {
    		disabled: true
    	}
    	$scope.salutation = 'Hello';
    	$scope.name = 'World';
    	$scope.changeDisabledStatus = function() {
    		if($scope.viewLogic.disabled) {
    			$scope.viewLogic.disabled = false;
    		}else {
    			$scope.viewLogic.disabled = true;
    		}
    	}
    });