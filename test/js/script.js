var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: "/",
		template: "Home Page"
	})
	.state('archive', {
		url: "/archive",
		template: "Archive Page"
	})
	.state('about', {
		url: "/about",
		template: "About Page"
	})
	.state('cast', {
		url: "/cast",
		template: "Cast Page"
	})
	.state('contact', {
		url: "/contact",
		template: "Contact Page"
	});
});