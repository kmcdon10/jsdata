'use strict';

app.factory('Post', function(DS, $state) {

	var Post = DS.defineResource({
		name: "posts",
		idAttribute: "_id",
		basePath: "/api",
		methods: {
			go: function () {
				console.log("going ", this);
				$state.go("post", {postId: this._id});
			}
		},
		relations: {
			belongsTo: {
				users: {
					localField: "author",
					localKey: "authorId"
				}
			}
		}
	});

return Post;

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

}).run(function(Post) {});


