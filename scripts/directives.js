
app.directive('btnDirective',function(){
	return {
	restrict: 'E',
    scope: {},
    templateUrl: 'btnDirective.html',
    
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active')
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
	}
	}
});
app.directive("ngbkFocus",function(){
	return {
		link:function(scope,element,attrs,controller){
			element[0].focus();
		}
	}
});