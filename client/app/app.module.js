(function () {
	'use strict';

	angular.module('app', [
		// Angular modules
		'ngMaterial',
		// Custom modules
		'app.auth',
		'app.core',
		'app.landing',
		'app.login',
		'app.pending',
		'app.signUp',
		'app.splash',
		'app.stripe',
		'app.core',
		// 3rd Party Modules
		'ui.router'
	]).config(appConfig);

	appConfig.$inject = ['$urlRouterProvider', '$stateProvider', '$httpProvider', 'StripeCheckoutProvider'];

	function appConfig($urlRouterProvider, $stateProvider, $httpProvider, StripeCheckoutProvider) {
		// define default page-where should the first page of the app begin

		$httpProvider.interceptors.push('authInterceptorService');

		$urlRouterProvider.otherwise('/landing');

		// define a state : $stateProvider.state(<name>, <options>)
		$stateProvider.state('landing', {
			url: '/landing',
			controller: 'LandingController as landingCtrl',
			templateUrl: 'app/landing/landing.template.html'
		});

		$stateProvider.state('login', {
			url: '/login',
			controller: 'LoginController as loginCtrl',
			templateUrl: 'app/login/login.template.html'
		});

		$stateProvider.state('pending', {
			url: '/pending',
			controller: 'PendingController as pendingCtrl',
			templateUrl: 'app/pending/pending.template.html'
		});


		$stateProvider.state('signup', {
			url: '/signup',
			controller: 'SignUpController as signUpCtrl',
			templateUrl: 'app/signUp/signUp.template.html'
		});

		$stateProvider.state('splash', {
			url: '/splash',
			controller: 'SplashController as splashCtrl',
			templateUrl: 'app/splash/splash.template.html'
		});

		$stateProvider.state('stripe', {
			url: '/stripe',
			controller: 'StripeController as stripeCtrl',
			templateUrl: 'app/stripe/stripe.template.html'
		});
	}

	.run(function ($log, StripeCheckout) {
		// You can set defaults here, too.
		StripeCheckout.defaults({
			opened: function () {
				$log.debug("Stripe Checkout opened");
			},
			closed: function () {
				$log.debug("Stripe Checkout closed");
			}
		});
	});
})();
