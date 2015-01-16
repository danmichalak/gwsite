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
			"bottom": {
				templateUrl: "templates/bottom.html"
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
			"bottom": {
				templateUrl: "templates/bottom.html"
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
			"bottom": {
				templateUrl: "templates/bottom.html"
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
			"bottom": {
				templateUrl: "templates/bottom.html"
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
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	});
});

// Retrieves the list of news stories and displays them in reverse order (latest to newest)
gwSite.controller('NewsListCtrl', function ($scope, $http){
	var urlStr = 'json/news.json';

	$http.get(urlStr).success(function(data) {

		$scope.posts = data.reverse();

	});
});

// Retrieves the appropriate json comic chapter list based on state parameters
gwSite.controller('ComicDetailCtrl', function ($scope, $stateParams, $http){
	$scope.comic = $stateParams.comic;

	var urlStr = 'json/' + $scope.comic + 'Chapters.json';

	$http.get(urlStr).success(function(data) {
		$scope.chapters = data;
		console.log($scope.chapters);
	});
});