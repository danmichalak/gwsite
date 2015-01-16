var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: "/",
		views: {
			"header": {
				template: "Header"
			},
			"container": {
				templateUrl: "templates/news-list.html"
			},
			"footer": {
				template: "Footer"
			}
		}
	})
	.state('archive', {
		url: "/archive",
		views: {
			"header": {
				template: "Header"
			},
			"container": {
				template: "Archive Page"
			},
			"footer": {
				template: "Footer"
			}
		}
	})
	.state('about', {
		url: "/about",
		views: {
			"header": {
				template: "Header"
			},
			"container": {
				template: "About Page"
			},
			"footer": {
				template: "Footer"
			}
		}
	})
	.state('cast', {
		url: "/cast",
		views: {
			"header": {
				template: "Header"
			},
			"container": {
				template: "Cast Page"
			},
			"footer": {
				template: "Footer"
			}
		}
	})
	.state('contact', {
		url: "/contact",
		views: {
			"header": {
				template: "Header"
			},
			"container": {
				template: "Contact Page"
			},
			"footer": {
				template: "Footer"
			}
		}
	});
});