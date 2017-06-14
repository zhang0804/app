angular.module("App",['ionic','App.controllers'])
.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('none');

    $stateProvider
        .state('tabs',{
            url:"/tabs",
            abstract:true,
            templateUrl:'templates/tabs.html'
        })
        .state('tabs.first',{
            url:"/first",
            views:{
                'first':{
                    templateUrl:'templates/first.html',
                    // controller:'firstctrl'

                }
            }
        })
        .state('first-details',{
            templateUrl:'details/first-details.html'
        })
        .state('news',{
            templateUrl:'details/news.html'
        })
        .state('talk',{
            templateUrl:'details/talk.html'
        })
        .state('internet',{
            templateUrl:'details/internet.html'
        })
        .state('economics',{
            templateUrl:'details/economics.html'
        })
        .state('tabs.Hotspot',{
            url:"/Hotspot",
            views:{
                'Hotspot':{
                    templateUrl:'templates/Hotspot.html',
                    // controller:'Hotspotctrl'

                }
            }
        })
        .state('tabs.card',{
            url:"/card",
            views:{
                'card':{
                    templateUrl:'templates/card.html',
                    controller:'cardctrl'

                }
            }
        })
        .state('tabs.card-details',{
            url:"/card-details",
            views:{
                'card':{
                    templateUrl:'templates/card-details.html',
                }
            }
        })
        .state('tabs.user',{
            url:"/user",
            views:{
                'user':{
                    templateUrl:'templates/user.html',
                    // controller:'userctrl'

                }
            }
        })
        .state('sign',{
            url:"/sign",
            templateUrl:'templates/sign.html'
        })
    $urlRouterProvider.otherwise('/sign');

}])