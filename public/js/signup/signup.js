'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope, $state, User) {
  $scope.signup = {};

  $scope.sendSignup = function (signUp) {
    console.log("singUp: ", signUp);
    console.log("signup: ", $scope.signup);
    $scope.signup.username = signUp.username;
    $scope.signup.password = signUp.password;
    User.create(signUp).then(function (result) {
      $state.go("create", {userId: result._id});
    });
  }
  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */

})