var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			"top": {
				template: ""
			},
			"adsenseHeader": {
				templateUrl: "templates/adsense-header.html"
			},
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/news-list.html",
				controller: "NewsListCtrl"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('comicarchive', {
		url: '/comics/:comic',
		views: {
			"top": {
				template: ""
			},
			"adsenseHeader": {
				templateUrl: "templates/adsense-header.html"
			},
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-detail.html",
				controller: "ComicDetailCtrl"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('comicpage', {
		url: '/comics/:comic/:page',
		views: {
			"top": {
				template: ""
			},
			"adsenseHeader": {
				templateUrl: "templates/adsense-header.html"
			},
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-view.html",
				controller: "ComicViewCtrl"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('about', {
		url: '/about',
		views: {
			"top": {
				template: ""
			},
			"adsenseHeader": {
				templateUrl: "templates/adsense-header.html"
			},
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/about.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('cast', {
		url: '/cast',
		views: {
			"top": {
				template: ""
			},
			"adsenseHeader": {
				templateUrl: "templates/adsense-header.html"
			},
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/cast.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('contact', {
		url: '/contact',
		views: {
			"top": {
				template: ""
			},
			"adsenseHeader": {
				templateUrl: "templates/adsense-header.html"
			},
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/contact.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	});
});

var adsenseHeaderTpl = '<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-3777765983404610" data-ad-slot="1233174681"></ins>';

gwSite.directive('adsenseHeader', function($window, $compile) {
	return {
		restrict: 'A',
		transclude: true,
		template: adsenseHeaderTpl,
		replace: false,
		link: function postLink(scope, element, iAttrs) {
			element.html("");
			element.append(angular.element($compile(adsenseHeaderTpl)(scope)));
			
			if (!$window.adsbygoogle) {
				$window.adsbygoogle = [];
			}

			$window.adsbygoogle.push({});
		}
	};
});


// Retrieves the list of news stories and displays them in reverse order (latest to newest)
gwSite.controller('NewsListCtrl', function ($scope, $http){
	var urlStr = 'json/news.json';

	$http.get(urlStr).success(function(data) {

		$scope.posts = data.reverse();

		for (i = 0; i < data.length; i ++) {
			$scope.posts[i].monthStr = monthConvert($scope.posts[i].month);
		}
	});
});

// Retrieves the appropriate json comic chapter list based on state parameters
gwSite.controller('ComicDetailCtrl', function ($scope, $stateParams, $http){
	$scope.comic = $stateParams.comic;

	var urlStr = 'json/' + $scope.comic + 'Chapters.json';

	$http.get(urlStr).success(function(data) {
		$scope.chapters = data;
	});
});

gwSite.controller('ComicViewCtrl', function ($scope, $stateParams, $http){
	$scope.comic = $stateParams.comic;
	$scope.page = $stateParams.page;

	var urlStr = 'json/' + $scope.comic + '.json';

	$http.get(urlStr).success(function(data) {
		var pageInt = parseInt($scope.page);

		var thisPage = data[pageInt-1];

		$scope.year = thisPage.year;
		$scope.month = thisPage.month;
		$scope.monthStr = monthConvert($scope.month);
		$scope.day = thisPage.day;
		$scope.authors = thisPage.authors;

		// Unless the current page is the first, the previous page will be the current page-1
		if (pageInt == 1) {
			$scope.prevPage = 1;
		} else {
			$scope.prevPage = pageInt - 1;
		}

		// The last page should be equal to the number of objects in the data array
		$scope.lastPage = data.length;

		// Unless the current page is the last, the next page will be the current page+1
		if (pageInt == parseInt($scope.lastPage)) {
			$scope.nextPage = $scope.lastPage;
		} else {
			$scope.nextPage = pageInt + 1;
		}
	});
});

// Converts an integer to the appropriate month 
function monthConvert(mInt) {

	var mStr = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	if ((mInt < 1) || (mInt > 12)) {
		return "N/A";
	} else {
		return mStr[mInt-1];
	}
}