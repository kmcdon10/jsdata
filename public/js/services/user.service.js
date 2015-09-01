'use  strict';

app.factory('User', function(DS) {
	
	var User = DS.defineResource({
		name: "users",
		idAttribute: "_id",
		basePath: "/api",

	});

  return User; 
}).run(function(User) {});

