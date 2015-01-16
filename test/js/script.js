var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: "/",
		views: {
			"header": {
				templateUrl: "templates/header.html"
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
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-detail.html"
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
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/about.html"
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
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/cast.html"
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
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/contact.html"
			},
			"footer": {
				template: "Footer"
			}
		}
	});
});