var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/news-list.html",
				controller: "NewsListCtrl"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('chapter', {
		url: '/comics/:comic',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-detail.html",
				controller: "ComicDetailCtrl"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('about', {
		url: '/about',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/about.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('cast', {
		url: '/cast',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/cast.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('contact', {
		url: '/contact',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/contact.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	});
});

gwSite.controller('NewsListCtrl', function ($scope, $http){
	var urlStr = 'json/news.json';

	$http.get(urlStr).success(function(data) {

		$scope.posts = data.reverse();

	});
});

gwSite.controller('ComicDetailCtrl', function ($scope, $routeParams){
	console.log($routeParams.comic);
});