// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','angular-coverflow'])

.run(function($ionicPlatform,$state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function (evt, toState) {

      if (toState.name!=='app.home') {
        $rootScope.darkBar = true;
      } else {
        $rootScope.darkBar = false;
      }
    });
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
  .state('app.education', {
    url: '/education',
    views: {
      'menuContent': {
        templateUrl: 'templates/education.html'
      }
    }
  })

  .state('app.skills', {
      url: '/skills',
      views: {
        'menuContent': {
          templateUrl: 'templates/skills.html',
          controller: 'SkillsCtrl'
        }
      }
    })
    .state('app.experience', {
      url: '/experience',
      views: {
        'menuContent': {
          templateUrl: 'templates/experience.html'
        }
      }
    })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
