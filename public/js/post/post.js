'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			users: function(User){
				// GET - > '/api/users'
				return User.findAll();
			}
		}
	});
});

// add necessary dependencies 
app.controller('PostCtrl', function($state, Post, $scope) {
	function findPost () {
		Post.find($state.params.postId).then(function(results) {
			$scope.post = results;
		}).then(null, function (error) {
			console.log(error);
		});
	}
	findPost();

	function destroyPost () {
		Post.destroy($scope.post._id).then(function(result) {
			alert("destroyed");
		}).then(function () {
			$state.go("main");
		}).then(null, function(error) {
			console.log(error);
		});
	}


	function editPost () {
		
	}

	/*
		2. DELETE POST 
		create a function that destroys the post, adds an alert that the post has been 
		successfully deleted, and redirects to the main state. 
	*/




	/*
		3. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/

})