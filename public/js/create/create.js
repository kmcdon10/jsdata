'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl' ,
		// resolve: {
		// 	author: function () {
		// 		User.find($state.params.userId).then(function (theAuthor) {
		// 			return theAuthor;
		// 		});
		// 	}
		// }
		/*
				add a resolve block that has an author function which 
				uses $stateParams to retrieve the author object
		*/
	});
});

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, author) {

	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	};

  $scope.createNewPost = function () {
  	$scope.post.title = $scope.newPost.title;
  	$scope.post.body = $scope.newPost.body;
  	$scope.post.author = author;
  	// Post.create($scope.post).then(function (result) {
  	// 	$state.go("main");
  	// });
  }


	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) ;