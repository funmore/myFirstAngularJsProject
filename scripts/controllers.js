app.controller("HouseController",function($scope){
	
});

app.controller("HomeController",function($scope){

});
app.controller("directiveController",function($scope){
	$scope.message={text:'nothing clicked yet'};
	$scope.clickUnfocused=function(){
		$scope.message.text="unfocused buttton clicked";
	}
	$scope.clickFocused=function(){
		$scope.message.text='focus button clicked';
	}
});

app.controller("AddUserController",function($scope){
	$scope.m='';
	$scope.message='';
	$scope.addUser=function(){
		$scope.message="thanks, "+$scope.user.first+" "+", we added you!";
	}
});