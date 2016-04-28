angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $location,$ionicHistory,$state ) {

    $scope.goHome=function(){
      $ionicHistory.nextViewOptions({
        disableBack: true
      });

      $state.go('app.home');

    }
$scope.goToContact=function(){
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  $state.go('app.contact');
}

  })
  .controller('SkillsCtrl', function($scope,$timeout) {
    $scope.lastTime=0;
    $scope.onCoverClick = function(cover){

      console.log(cover.id)
    }
    $scope.onChangeCover=function(id){


      $timeout.cancel($scope.promise);

      if(new Date().getTime()-$scope.lastTime>500){

        $scope.currentName = $scope.covers[id].name;
        $scope.currentDescription= $scope.covers[id].description;
        if (!$scope.$$phase) {
          $scope.$apply()
        }
      }else{

        $scope.promise =$timeout( function(){

          $scope.currentName = $scope.covers[id].name;
          $scope.currentDescription= $scope.covers[id].description;

          if (!$scope.$$phase) {
            $scope.$apply()
          }

        }, 500);
      }

      $scope.lastTime = new Date().getTime();



    };

// Directive handle to watch values
    $scope.coverflow = {};

    // Coverflow image array
    $scope.images = [

    ];
    $scope.covers=[
      {
        cover: 'images/tools/html.png',
        width: 100,
        height: 100,
        name:'HTML 5',
        description:'Hypertext Markup Language <a href="http://www.w3.org/TR/html5/" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/css.png',
        width: 100,
        height: 100,
          name:'CSS 3',
        description:'Cascading Style Sheets <a href="http://www.w3.org/standards/webdesign/htmlcss" target="_blank">View more</a>'

      },
      {
        cover: 'images/tools/js.png',
        width: 100,
        height: 100,
        name:'Javascript',
        description:'Interpreted programming language <a href="http://www.w3.org/standards/webdesign/script" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/angular.png',
        width: 100,
        height: 100,
        name:'AngularJS',
        description:'Javascript MVC Framework <a href="http://angular.io" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/php.png',
        width: 100,
        height: 100,
        name:'PHP',
        description:'Web programming language<a href="http://php.net" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/java.png',
        width: 100,
        height: 100,
        name:'Java',
        description:'General-purpose programming language <a href="http://docs.oracle.com/javase/7/docs/technotes/guides/language/" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/cordova.png',
        width: 100,
        height: 100,
        name:'Apache Cordova',
        description:'Platform for building  mobile applications <a href="https://cordova.apache.org/" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/backbone.png',
        width: 100,
        height: 100,
        name:'BackboneJS',
        description:'Javascript MVC Framework  <a href="http://backbonejs.org/" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/jquery.png',
        width: 100,
        height: 100,
        name:'jQuery',
        description:'Javascript  Framework  <a href="https://jquery.com/" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/ionic.png',
        width: 100,
        height: 100,
        name:'Ionic',
        description:'Front-end SDK for developing  mobile apps <a href="http://ionicframework.com/" target="_blank">View more</a>'
      },
      {
        cover: 'images/tools/node.png',
        width: 100,
        height: 100,
        name:'NodeJS',
        description:'Runtime environment for server-side applications. <a href="https://nodejs.org/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/express.png',
        width: 100,
        height: 100,
        name:'ExpressJS',
        description:'Web framework for Node.js<a href="http://expressjs.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/npm.png',
        width: 100,
        height: 100,
        name:'NPM',
        description:'Node.js package manager  <a href="https://www.npmjs.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/sass.png',
        width: 100,
        height: 100,
        name:'Sass',
        description:'CSS Preprocessor <a href="http://sass-lang.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/less.png',
        width: 100,
        height: 100,
        name:'Less',
        description:'CSS Preprocessor <a href="http://lesscss.org/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/bootstrap.png',
        width: 100,
        height: 100,
        name:'Bootstrap',
        description:'Html/Css/Js Framework for responsive sites <a href="http://getbootstrap.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/gulp.png',
        width: 100,
        height: 100,
        name:'Gulp',
        description:'JavaScript Task Runner <a href="http://gruntjs.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/grunt.png',
        width: 100,
        height: 100,
        name:'Grunt',
        description:'JavaScript Task Runner <a href="http://gruntjs.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/mongodb.png',
        width: 100,
        height: 100,
        name:'MongoDB',
        description:'NoSql Database <a href="https://www.mongodb.org/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/mysql.png',
        width: 100,
        height: 100,
        name:'MySQL',
        description:'Sql Database <a href="https://www.mysql.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/yeoman.png',
        width: 100,
        height: 100,
        name:'Yeoman',
        description:'Web´s scaffolding tool <a href="http://yeoman.io/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/umbraco.png',
        width: 100,
        height: 100,
        name:'Umbraco',
        description:'Open Source .NET CMS <a href="http://umbraco.com/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/wordpress.png',
        width: 100,
        height: 100,
        name:'Wordpress',
        description:'Open Source PHP CMS <a href="https://wordpress.org/" target="_blank">View more</a>'
      }
      ,
      {
        cover: 'images/tools/magento.png',
        width: 100,
        height: 100,
        name:'Magento',
        description:'Open Source PHP CMS for e-commerce web sites <a href="http://magento.com/" target="_blank">View more</a>'
      }

    ];


  })
  .controller('ContactCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  });
