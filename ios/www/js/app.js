/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        screen.lockOrientation('portrait');
        
        cordova.plugins.notification.local.on('click', function (notification) {
            localStorage.setItem("life", 20);
            cordova.plugins.notification.local.clear(101, function(){});
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        //var parentElement = document.getElementById(id);
        //var listeningElement = parentElement.querySelector('.listening');
        //var receivedElement = parentElement.querySelector('.received');

        //listeningElement.setAttribute('style', 'display:none;');
        //receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};

(function() {
    var app = angular.module('tileTimeApp', ['onsen.directives', 'ngTouch', 'ngSanitize', 'angular-carousel',  'LocalStorageModule', 'ui.event']);
    
    document.addEventListener('deviceready', function() {
        angular.bootstrap(document, ['tileTimeApp']);       
    }, false);
    
    // Main Controller
    app.controller('MainController', function($scope, localStorageService){
        $scope.loader = {loading: false, text: "Loading..."};
        
        if (localStorageService.get("life") == null || localStorageService.get("life") == "") {
            localStorageService.add("life", 20);
        }
        
        $scope.initStore = function() {

            if (!window.store) {
                console.log('Store not available');
                return;
            }
        
            // Enable maximum logging level
            store.verbosity = store.DEBUG;
        
            // Inform the store of your products
            console.log('registerProducts');
            store.register({
                id:    'com.tileTime.sneaky5',
                alias: 'Sneaky 5',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.sneaky10',
                alias: 'Sneaky 10',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.sneaky30',
                alias: 'Sneaky 30',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.clockboost5',
                alias: 'Clock Boost 5',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.clockboost10',
                alias: 'Clock Boost 10',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.clockboost30',
                alias: 'Clock Boost 30',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.tileBuster5',
                alias: 'Tile Buster 5',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.tileBuster10',
                alias: 'Tile Buster 10',
                type:   store.CONSUMABLE
            });
            
            store.register({
                id:    'com.tileTime.tileBuster30',
                alias: 'Tile Buster 30',
                type:   store.CONSUMABLE
            });
        
            store.register({
                id:    'com.tileTime.lives',
                alias: 'Lives',
                type:   store.CONSUMABLE
            });
                        
            // When any product gets updated, refresh the HTML.
            store.when("product").updated(function (p) {
                //app.renderIAP(p);
                console.log(p);
            });
            
            // Log all errors
            store.error(function(error) {
                navigator.notification.alert( error.message, function(){}, "TileTime", "Ok");
                $scope.loader.loading = false;
                
                //navigator.notification.alert( error.message, function(){}, "Tile Time", "Ok");
                $scope.$apply();
            });
        
            // When purchase of an Sneaky 5 is approved,
            // deliver it... by displaying logs in the console.
            store.when("Sneaky 5").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentSneakyPeak = parseInt($scope.currentSneakyPeak) + 5;
                localStorageService.add("currentSneakyPeak", $scope.currentSneakyPeak);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            store.when("Sneaky 10").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentSneakyPeak = parseInt($scope.currentSneakyPeak) + 10;
                localStorageService.add("currentSneakyPeak", $scope.currentSneakyPeak);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            store.when("Sneaky 30").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentSneakyPeak = parseInt($scope.currentSneakyPeak) + 30;
                localStorageService.add("currentSneakyPeak", $scope.currentSneakyPeak);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            
            store.when("Clock Boost 5").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentClockBoost = parseInt($scope.currentClockBoost) + 5;
                localStorageService.add("currentClockBoost", $scope.currentClockBoost);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            store.when("Clock Boost 10").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentClockBoost = parseInt($scope.currentClockBoost) + 10;
                localStorageService.add("currentClockBoost", $scope.currentClockBoost);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            store.when("Clock Boost 30").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentClockBoost = parseInt($scope.currentClockBoost) + 30;
                localStorageService.add("currentClockBoost", $scope.currentClockBoost);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            
            store.when("Tile Buster 5").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentTileBuster = parseInt($scope.currentTileBuster) + 5;
                localStorageService.add("currentTileBuster", $scope.currentTileBuster);
                $scope.loader.loading = false;
                $scope.$apply();

            });
            store.when("Tile Buster 10").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentTileBuster = parseInt($scope.currentTileBuster) + 10;
                localStorageService.add("currentTileBuster", $scope.currentTileBuster);
                $scope.loader.loading = false;
                $scope.$apply();
            });
            store.when("Tile Buster 30").approved(function (order) {
                console.log("You got an Sneaky 5!");
                order.finish();
                $scope.currentTileBuster = parseInt($scope.currentTileBuster) + 30;
                localStorageService.add("currentTileBuster", $scope.currentTileBuster);
                $scope.loader.loading = false;
                $scope.$apply();
            });
        
            store.when("Lives").approved(function (order) {
                console.log("You got an Lives 50!");
                order.finish();
                if (localStorageService.get("life") &&  localStorageService.get("life") != null && localStorageService.get("life") != "") {
                    var lives_count = parseInt(localStorageService.get("life"));
                    lives_count = lives_count + 100;
                    
                    localStorageService.add("life", lives_count);
                    $scope.loader.loading = false;
                    $scope.$apply();
                }else{
                    return;
                }
            });
            
            // When store is ready, activate the "refresh" button;
            store.ready(function() {
        
            });
        
            store.refresh();
        };
        
        $scope.onLoad = function(){
            
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        
        $scope.currentSneakyPeak = 99;
        $scope.currentClockBoost = 99;
        $scope.currentTileBuster = 99;
        
        function onDeviceReady() {
            $scope.initStore();
            
            if (localStorageService.get("currentSneakyPeak") == null || localStorageService.get("currentSneakyPeak") == "" ) {
                localStorageService.add("currentSneakyPeak", 99);
            }else{
                $scope.currentSneakyPeak = localStorageService.get("currentSneakyPeak");
            }
            
            if (localStorageService.get("currentClockBoost") == null || localStorageService.get("currentClockBoost") == "" ) {
                localStorageService.add("currentClockBoost", 99);
            }else{
                $scope.currentClockBoost = localStorageService.get("currentClockBoost");
            }
            
            if (localStorageService.get("currentTileBuster") == null || localStorageService.get("currentTileBuster") == "" ) {
                localStorageService.add("currentTileBuster", 99);
            }else{
                $scope.currentTileBuster = localStorageService.get("currentTileBuster");
            }
        }
        
        $scope.addSneakPeak = function(amount){
            //$scope.loader.loading = true;
            if (parseInt(amount) == 5) {
                store.order('com.tileTime.sneaky5');
            }
            if (parseInt(amount) == 10) {
                store.order('com.tileTime.sneaky10');
            }
            if (parseInt(amount) == 30) {
                store.order('com.tileTime.sneaky30');
            }
        }
        $scope.clickSeeArrangement = function(){
            $scope.currentSneakyPeak = parseInt($scope.currentSneakyPeak) -1;
            if ($scope.currentSneakyPeak < 0) {
                $scope.currentSneakyPeak = 0;
            }
            localStorageService.add("currentSneakyPeak", $scope.currentSneakyPeak);
        }
        
        $scope.addClockBoost = function(amount){
            //$scope.loader.loading = true;
            if (parseInt(amount) == 5) {
                store.order('com.tileTime.clockboost5');
            }
            if (parseInt(amount) == 10) {
                store.order('com.tileTime.clockboost10');
            }
            if (parseInt(amount) == 30) {
                store.order('com.tileTime.clockboost30');
            }

        }
        $scope.clickMoreTime = function(){
            $scope.currentClockBoost = parseInt($scope.currentClockBoost) -1;
            if ($scope.currentClockBoost < 0) {
                $scope.currentClockBoost = 0;
            }
            localStorageService.add("currentClockBoost", $scope.currentClockBoost);
        }
        
        $scope.addTileBuster = function(amount){
            //$scope.loader.loading = true;
            if (parseInt(amount) == 5) {
                store.order('com.tileTime.tileBuster5');
            }
            if (parseInt(amount) == 10) {
                store.order('com.tileTime.tileBuster10');
            }
            if (parseInt(amount) == 30) {
                store.order('com.tileTime.tileBuster30');
            }

        }
        $scope.clickCompleteOneTile = function(){
            $scope.currentTileBuster = parseInt($scope.currentTileBuster) -1;
            if ($scope.currentTileBuster < 0) {
                $scope.currentTileBuster = 0;
            }
            localStorageService.add("currentTileBuster", $scope.currentTileBuster);
        }
        $scope.addMoreLives = function(){
            store.order('com.tileTime.lives');
        }
        /*
        // complete one tile button cliks
        $scope.clickCompleteOneTileBtn = 0;
        $scope.initCompleteOneTileBtn = function(){
            $scope.clickCompleteOneTileBtn = 0;
        }
        $scope.onClickCompleteOneTileBtn = function(){
            $scope.clickCompleteOneTileBtn = 1;
        }
        */
        $scope.timerList = new Array();
        $scope.levelTimer;
        $scope.counter = 100;
        $scope.playTime = 1;
        $scope.gameTimer = function(){
            $scope.counter -= (100/$scope.playTime)/100;
            if ($scope.counter < 0) {
                //$scope.counter=1
                //$scope.stopLevelTimer();
            }
            $("#progressbar").progressbar( "value", $scope.counter);
        }
        
        $scope.setPlayTime = function(data){
            $scope.playTime = data;
        }
        $scope.initTimerCounter = function(){
            console.log("initTimerCounter");
            $scope.counter = 100;
        }
        $scope.getTimerCounter = function(){
            return $scope.counter;
        }
        $scope.startLevelTimer = function(){
            console.log("startLevelTimer");
            $scope.levelTimer = setInterval($scope.gameTimer,10);
            $scope.timerList.push($scope.levelTimer);
        }
        $scope.stopLevelTimer = function(){
            console.log("stopLevelTimer");
            clearInterval($scope.levelTimer);
        }
        $scope.clearLevelTimer = function(){
            console.log("clearLevelTimer");
            for(var index in $scope.timerList)
            {
                clearInterval($scope.timerList[index]);
            }
            $scope.timerList = new Array();
        }
                
        
        if (localStorageService.get("gameConfig") != null && localStorageService.get("gameConfig").worlds != null) {
            $scope.gameConfig = localStorageService.get("gameConfig");
        }else{
            $scope.gameConfig = { worlds:[
                                {
                                    world:1,
                                    tileOrder:["1.png", "3.png", "2.png", "5.png", "9.png", "16.png"],
                                    levels:[
                                        { id:1, tiles:2, tileArray:[1, 1], complete:true, rememberTime:3, playTime:5},
                                        { id:2, tiles:2, tileArray:[1, 3], complete:false, rememberTime:2, playTime:5},
                                        { id:3, tiles:3, tileArray:[1, 3, 3], complete:false, rememberTime:4, playTime:5},
                                        { id:4, tiles:3, tileArray:[3, 2, 1], complete:false, rememberTime:3, playTime:5},
                                        { id:5, tiles:3, tileArray:[1, 5, 2], complete:false, rememberTime:3, playTime:4},
                                        { id:6, tiles:4, tileArray:[3, 5, 2, 3], complete:false, rememberTime:3, playTime:5},
                                        { id:7, tiles:4, tileArray:[5, 3, 3, 2], complete:false, rememberTime:3, playTime:4},
                                        { id:8, tiles:4, tileArray:[3, 1, 9, 5], complete:false, rememberTime:5, playTime:5},
                                        { id:9, tiles:4, tileArray:[2, 5, 3, 1], complete:false, rememberTime:3, playTime:4},
                                        { id:10, tiles:4, tileArray:[5, 1, 9, 16], complete:false, rememberTime:3, playTime:5}
                                    ]
                                },
                                {
                                    world:2,
                                    tileOrder:["1.png", "15.png", "6.png", "2.png", "5.png", "9.png", "11.png", "3.png"],
                                    levels:[
                                        { id:1, tiles:4, tileArray:[1, 6, 15, 2], complete:true, rememberTime:3, playTime:5},
                                        { id:2, tiles:4, tileArray:[2, 9, 5, 1], complete:false, rememberTime:2, playTime:4},
                                        { id:3, tiles:4, tileArray:[9, 5, 5, 2], complete:false, rememberTime:3, playTime:4},
                                        { id:4, tiles:4, tileArray:[6, 3, 1, 5], complete:false, rememberTime:3, playTime:5},
                                        { id:5, tiles:4, tileArray:[11, 2, 9, 6], complete:false, rememberTime:3, playTime:5},
                                        { id:6, tiles:4, tileArray:[3, 1, 2, 5], complete:false, rememberTime:3, playTime:4},
                                        { id:7, tiles:4, tileArray:[5, 11, 6, 15], complete:false, rememberTime:3, playTime:4},
                                        { id:8, tiles:4, tileArray:[1, 6, 5, 3], complete:false, rememberTime:2, playTime:4},
                                        { id:9, tiles:4, tileArray:[15, 1, 2, 6], complete:false, rememberTime:1, playTime:5},
                                        { id:10, tiles:4, tileArray:[3, 2, 11, 5], complete:false, rememberTime:1, playTime:4}
                                    ]
                                },
                                {
                                    world:3,
                                    tileOrder:["7.png", "11.png", "8.png", "15.png", "6.png", "14.png", "13.png", "5.png", "9.png", "16.png", "2.png", "3.png"],
                                    levels:[
                                        { id:1, tiles:4, tileArray:[7, 15, 11, 8], complete:true, rememberTime:3, playTime:5},
                                        { id:2, tiles:4, tileArray:[9, 8, 15, 11], complete:false, rememberTime:3, playTime:5},
                                        { id:3, tiles:4, tileArray:[6, 13, 14, 5], complete:false, rememberTime:3, playTime:4},
                                        { id:4, tiles:4, tileArray:[5, 7, 14, 2], complete:false, rememberTime:3, playTime:4},
                                        { id:5, tiles:4, tileArray:[14, 1, 8, 6], complete:false, rememberTime:3, playTime:4},
                                        { id:6, tiles:5, tileArray:[6, 8, 14, 7, 9], complete:false, rememberTime:2, playTime:5},
                                        { id:7, tiles:5, tileArray:[14, 13, 11, 6, 15], complete:false, rememberTime:2, playTime:5},
                                        { id:8, tiles:5, tileArray:[3, 8, 5, 2, 11], complete:false, rememberTime:2, playTime:4},
                                        { id:9, tiles:5, tileArray:[16, 6, 14, 13, 5], complete:false, rememberTime:2, playTime:4},
                                        { id:10, tiles:5, tileArray:[11, 14, 13, 16, 3], complete:false, rememberTime:2, playTime:4}
                                    ]
                                },{
                                    world:4,
                                    tileOrder:["7.png", "12.png", "13.png", "9.png", "14.png", "3.png", "1.png", "5.png", "6.png", "16.png", "11.png", "10.png", "15.png", "4.png", "2.png", "8.png"],
                                    levels:[
                                        { id:1, tiles:6, tileArray:[7, 13, 12, 9, 14, 3], complete:true, rememberTime:4, playTime:5},
                                        { id:2, tiles:6, tileArray:[5, 14, 1, 16, 3, 10], complete:false, rememberTime:4, playTime:5},
                                        { id:3, tiles:6, tileArray:[8, 16, 7, 9, 6, 4], complete:false, rememberTime:3, playTime:5},
                                        { id:4, tiles:6, tileArray:[11, 15, 2, 12, 13, 14], complete:false, rememberTime:3, playTime:5},
                                        { id:5, tiles:6, tileArray:[11, 11, 5, 5, 16, 10], complete:false, rememberTime:2, playTime:5},
                                        { id:6, tiles:6, tileArray:[7, 9, 9, 7, 12, 5], complete:false, rememberTime:3, playTime:5},
                                        { id:7, tiles:6, tileArray:[4, 13, 12, 11, 5, 1], complete:false, rememberTime:3, playTime:5},
                                        { id:8, tiles:6, tileArray:[14, 16, 7, 16, 2, 7], complete:false, rememberTime:2, playTime:5},
                                        { id:9, tiles:6, tileArray:[10, 15, 6, 3, 13, 8], complete:false, rememberTime:2, playTime:4},
                                        { id:10, tiles:6, tileArray:[1, 1, 1, 1, 1, 1], complete:false, rememberTime:1, playTime:4}
                                    ]
                                }
                            ]};
        }
        
        $scope.m_sound = null;
        
        $scope.playAudio = function(url, numberOfLoop){
            try{
                if ($scope.m_sound) {
                    $scope.m_sound.stop();
                    $scope.m_sound.release();
                }
            }catch(e){console.log(e.message);}
            $scope.m_sound = new Media(url, function(){}, function(e){ console.log(e);});
            $scope.m_sound.play({numberOfLoops: numberOfLoop});
        }
    });
    // Home page Controller
    app.controller('HomeController', function($scope, $timeout, localStorageService) {
        
        var gameplay_sound = setInterval(function(){
            var currentPage = appNavigator.getCurrentPage();
            console.log(currentPage.options);
            if (currentPage.options.name == "shop") {
                return;
            }
            if ($scope.m_sound) {
                $scope.m_sound.getCurrentPosition(
                    function(position){
                        if (position == -1) {
                            $scope.playAudio("sound/Tile Time Level Screen OK .mp3", 1);
                        }
                    },
                    function(error){console.log(erro);}
                );
            }else{
                $scope.playAudio("sound/Tile Time Level Screen OK .mp3", 1);
            }
        }, 1000);
    
        $timeout(function(){$(".home_page_section").animate({opacity:1}, 1000, function(){});});
        
        $scope.onPlayBtn = function(){
            clearInterval(gameplay_sound);
            appNavigator.pushPage('templates/story.html');
            //$scope.playAudio("sound/Buton version B.mp3", 1);
        }
        
        $scope.onGotoShopBtn = function(){
            //clearInterval(gameplay_sound);
            var param = {name:"shop"}
            appNavigator.pushPage('templates/shop.html', param);
            $scope.playAudio("sound/Buton version B.mp3", 1);
        }
        
        $timeout(function(){ 
            if (localStorageService.get("life") &&  localStorageService.get("life") != null && localStorageService.get("life") != "") {
                var life = parseInt(localStorageService.get("life"));
                //alert(life);
                if (life <1) {
                    clearInterval(gameplay_sound);
                    appNavigator.pushPage('templates/more_live.html', {animation:'fade'});
                }
            }
        });

    });

    // Home page Controller
    app.controller('MoreLiveController', function($scope, $timeout, localStorageService) {
        
        $scope.playAudio("sound/Tile Time Level failed feedback.mp3", 1);
        
        $scope.onGotoShopBtn = function(){
            appNavigator.pushPage('templates/shop.html');
            $scope.playAudio("sound/Buton version B.mp3", 1);
        }
                   /*
                   var life = parseInt(localStorage.getItem("life"));
                   if(life != "NaN" && life >0){
                    localStorageService.set("life", life);
                    localStorage.setItem("life", 0);
                    appNavigator.resetToPage('templates/select_world.html', {animation:'fade'});
                   }
                   */
                   
                   var intervalLiveTime = setInterval(function(){
                                                      
                                                      var expiredTime = parseInt(localStorage.getItem("expiredTime"));
                                                      var currentTime = parseInt(new Date().getTime());
                                                      if(expiredTime != "NaN" && expiredTime >0){
                                                      
                                                      if((currentTime - expiredTime) > 30*60*1000){
                                                      localStorageService.set("life", 20);
                                                      localStorage.setItem("expiredTime", 0);
                                                      appNavigator.resetToPage('templates/select_world.html', {animation:'fade'});
                                                      clearInterval(intervalLiveTime);
                                                      }
                                                      }
                                                      }, 1000);
                   
    });
    
    // Story page Controller
    app.controller('StoryController', function($scope) {
        
        $scope.playAudio("sound/Tile TIme Story Screen feedback.mp3", -1);
        
        $scope.isIpad = false;
        
        if ($(window).width() >700) {
            $scope.isIpad = true;
        }
        
        $scope.onContinue = function(){
            appNavigator.pushPage('templates/select_world.html');
            $scope.playAudio("sound/Buton version B.mp3", 1);
        }
    });
    
    // shop page Controller
    app.controller('ShopController', function($scope) {
       $scope.addSneakyPeaks = function(amount){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            $scope.addSneakPeak(amount); 
       }
       
       $scope.addClockBoosts = function(amount){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            $scope.addClockBoost(amount); 
       }
       
       $scope.addTileBusters = function(amount){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            $scope.addTileBuster(amount); 
       }
       
       $scope.clickMoreLives = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            $scope.addMoreLives(); 
       }
    });
    
    // HowToPlay page Controller
    app.controller('HowToPlayController', function($scope) {
        var currentPage = $scope.ons.navigator.getCurrentPage();
        $scope.param = currentPage.options.param;
        
        $scope.onContinue = function(){
            $scope.ons.navigator.resetToPage("templates/game_play.html", $scope.param);
        }
    });    
    
    // Select word page Controller
    app.controller('SelectWorldController', function($scope, GalleryData) {
        
        var items = GalleryData.items;
                   
        function addSlides(target) {
            angular.forEach(items,function(item,index){
                if (item.id >1) {
                    if ($scope.gameConfig.worlds[item.id -2].levels[9].complete == false) {
                        target.push({
                            id: item.id,
                            picture: item.lock_src,
                            world: item.world,
                            word: item.word,
                            mainColor: item.mainColor,
                            mainImg: item.mainImg,
                            item: (index + 1)
                        });
                    }else{
                        target.push({
                            id: item.id,
                            picture: item.src,
                            world: item.world,
                            word: item.word,
                            mainColor: item.mainColor,
                            mainImg: item.mainImg,
                            item: (index + 1)
                        });
                    }
                }else{
                    target.push({
                        id: item.id,
                        picture: item.src,
                        world: item.world,
                        word: item.word,
                        mainColor: item.mainColor,
                        mainImg: item.mainImg,
                        item: (index + 1)
                    });
                }
            });
         };

        $scope.slides = [];
        // get world gallery data
        addSlides($scope.slides);
        $scope.flag = false;
        $scope.showDetail = function(index){
            console.log($scope.flag);
            if ($scope.flag == true) {
                return;
            }else{
                $scope.flag = true;
            }
            
            var selectedWorld = $scope.slides[index];
            //console.log(selectedWorld);
            if (selectedWorld.id >1) {
                if ($scope.gameConfig.worlds[selectedWorld.id -2].levels[9].complete == false) {
                    return;
                }
                
            }
            
            $scope.playAudio("sound/Buton version B.mp3", 1);
            
            selectedWorld.animation = 'slide';
            $scope.ons.navigator.resetToPage("templates/select_level.html", selectedWorld);
        };
        
        $scope.onGotoShopBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            appNavigator.pushPage('templates/shop.html');            
        }
    });
    
    // Select level Controller
    app.controller('SelectLevelController', function($scope, $timeout, localStorageService) {
        //get current page option
        var currentPage = $scope.ons.navigator.getCurrentPage();
        $scope.selectedWorld = currentPage.options;
 
        $scope.currentWorldData = $scope.gameConfig.worlds[$scope.selectedWorld.id -1];
        
        $scope.showDetail = function(index){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            
            // show how_to_play page
            if (localStorageService.get("first_play") == null || localStorageService.get("first_play") == "" ) {
                $scope.initTimerCounter();
                $scope.stopLevelTimer();
                $scope.clearLevelTimer();
                localStorageService.add("first_play", "played");
                var param = {selectedWorld:$scope.currentWorldData , selectedLevelId:index};
                $scope.ons.navigator.pushPage("templates/how_to_play.html", {param:param, animation: 'lift'});
            }else{

                if ($scope.currentWorldData.levels[index].complete == true) {
                    var param = {selectedWorld:$scope.currentWorldData , selectedLevelId:index, name:"gameplay"}
                    $scope.ons.navigator.resetToPage("templates/game_play.html", param);
                }
            }
        }
        
        $timeout(function(){
            var mySwiper = new Swiper('.m_swiper_cintainer',{
                pagination: '.pagination',
                paginationClickable: true,
                slidesPerView: 3
            });
        }, 100);
        
        $scope.onGotoShopBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            appNavigator.pushPage('templates/shop.html');            
        }
    });
    
    // Pause page Controller
    app.controller('PauseController', function($scope) {
        $scope.pauseTimer = setInterval(function(){
            $scope.clearLevelTimer();
        }, 10);
        
        $scope.onContinue = function(){
            clearInterval($scope.pauseTimer);
            $scope.ons.navigator.popPage();
            $scope.startLevelTimer();
        }
    });
    
    // level complete page Controller
    app.controller('LevelCompleteController', function($scope, GalleryData, $timeout) {
        var items = GalleryData.items;
        $timeout(function(){
            $scope.clearLevelTimer();
        });
        $scope.playAudio("sound/Tile Time level complete.mp3", 1);
        
        function addSlides(target) {
            angular.forEach(items,function(item,index){
                target.push({
                    id: item.id,
                    picture: item.src,
                    world: item.world,
                    word: item.word,
                    mainColor: item.mainColor,
                    mainImg: item.mainImg,
                    item: (index + 1)
                });
            });
         };

        $scope.slides = [];
        // get world gallery data
        addSlides($scope.slides);
        
        var currentPage = $scope.ons.navigator.getCurrentPage();
        var param = currentPage.options.param;
        $scope.currentWorldId = param.selectedWorld.world;
        $scope.currentLevelId = param.selectedWorld.levels[param.selectedLevelId ].id;
        
        switch ($scope.currentWorldId) {
            case 1:
                $(".level_complete_board").css("background-image", "url(img/gameboard.png)");
                $(".game_play_body").css("background-color", "#a1d790");
                break;
            case 2: 
                $(".level_complete_board").css("background-image", "url(img/gameboard1.png)");
                $(".game_play_body").css("background-color", "#e6d9ab");
                break;
            case 3:
                $(".level_complete_board").css("background-image", "url(img/gameboard2.png)");
                $(".game_play_body").css("background-color", "#ffffff");
                break;
            case 4:
                $(".level_complete_board").css("background-image", "url(img/gameboard3.png)");
                $(".game_play_body").css("background-color", "#adadad");
                break;
        }
        
        $scope.onListBtn = function(index){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            var selectedWorld = $scope.slides[$scope.currentWorldId -1];
            $scope.ons.navigator.pushPage("templates/select_level.html", selectedWorld);
        };
        
        $scope.onReplayBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId -1] , selectedLevelId:$scope.currentLevelId-1, name:"gameplay"}
            $scope.ons.navigator.resetToPage("templates/game_play.html", option);
        };
        
        $scope.onPlayNextLevelBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            
            if ($scope.currentLevelId == 10) {
                if ($scope.currentWorldId != 4) {
                    var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId] , selectedLevelId:0, name:"gameplay"}
                    $scope.ons.navigator.resetToPage("templates/game_play.html", option);
                }
            }else{
                var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId -1] , selectedLevelId:$scope.currentLevelId, name:"gameplay"}
                $scope.ons.navigator.resetToPage("templates/game_play.html", option);
            }
        };
        
        $scope.shareFB = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            window.plugins.socialsharing.shareViaFacebook("I am saving the monsters in Tile Time! Come and join me. See @TileTimeApp for more info. Built by @jewel_Uk", null, null, function(){ }, function(e){});
        }
        
        $scope.shareTwitter = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            window.plugins.socialsharing.shareViaTwitter("I am saving the monsters in Tile Time! Come and join me. See @TileTimeApp for more info. Built by @jewel_Uk", null, null);
        }
        
        //$scope.initCompleteOneTileBtn();
    });
    
    // World complete page Controller
    app.controller('WorldCompleteController', function($scope, GalleryData, $timeout) {
        var items = GalleryData.items;
        $timeout(function(){
            $scope.clearLevelTimer();
        });
        $scope.playAudio("sound/Tile Time level complete.mp3", 1);
        
        function addSlides(target) {
            angular.forEach(items,function(item,index){
                target.push({
                    id: item.id,
                    picture: item.src,
                    world: item.world,
                    word: item.word,
                    mainColor: item.mainColor,
                    mainImg: item.mainImg,
                    item: (index + 1)
                });
            });
         };

        $scope.slides = [];
        // get world gallery data
        addSlides($scope.slides);
        
        var currentPage = $scope.ons.navigator.getCurrentPage();
        var param = currentPage.options.param;
        $scope.currentWorldId = param.selectedWorld.world;
        $scope.currentLevelId = param.selectedWorld.levels[param.selectedLevelId ].id;
        /*
        switch ($scope.currentWorldId) {
            case 1:
                $(".level_complete_board").css("background-image", "url(img/gameboard.png)");
                $(".game_play_body").css("background-color", "#a1d790");
                break;
            case 2: 
                $(".level_complete_board").css("background-image", "url(img/gameboard1.png)");
                $(".game_play_body").css("background-color", "#e6d9ab");
                break;
            case 3:
                $(".level_complete_board").css("background-image", "url(img/gameboard2.png)");
                $(".game_play_body").css("background-color", "#ffffff");
                break;
            case 4:
                $(".level_complete_board").css("background-image", "url(img/gameboard3.png)");
                $(".game_play_body").css("background-color", "#adadad");
                break;
        }
        */
        $scope.onListBtn = function(index){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            var selectedWorld = $scope.slides[$scope.currentWorldId -1];
            $scope.ons.navigator.pushPage("templates/select_level.html", selectedWorld);
        };
        
        $scope.onReplayBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId -1] , selectedLevelId:$scope.currentLevelId-1, name:"gameplay"}
            $scope.ons.navigator.resetToPage("templates/game_play.html", option);
        };
        
        $scope.onPlayNextLevelBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            
            if ($scope.currentLevelId == 10) {
                if ($scope.currentWorldId == 4) {
                    appNavigator.pushPage('templates/select_world.html');
                    return;                    
                }
                if ($scope.currentWorldId != 4) {
                    var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId] , selectedLevelId:0, name:"gameplay"}
                    $scope.ons.navigator.resetToPage("templates/game_play.html", option);
                }
            }else{
                var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId -1] , selectedLevelId:$scope.currentLevelId, name:"gameplay"}
                $scope.ons.navigator.resetToPage("templates/game_play.html", option);
            }
        };
        
        $scope.shareFB = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            window.plugins.socialsharing.shareViaFacebook("I am saving the monsters in Tile Time! Come and join me. See @TileTimeApp for more info. Built by @jewel_Uk", null, null, function(){ }, function(e){});
        }
        
        $scope.shareTwitter = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            window.plugins.socialsharing.shareViaTwitter("I am saving the monsters in Tile Time! Come and join me. See @TileTimeApp for more info. Built by @jewel_Uk", null, null);
        }
        
        //$scope.initCompleteOneTileBtn();
    });
    
    // level failed page Controller
    app.controller('LevelFailedController', function($scope, GalleryData, localStorageService, $timeout) {
        $scope.playAudio("sound/Tile Time Level failed feedback.mp3", 1);
        
        var items = GalleryData.items;

        function addSlides(target) {
            angular.forEach(items,function(item,index){
                target.push({
                    id: item.id,
                    picture: item.src,
                    world: item.world,
                    word: item.word,
                    mainColor: item.mainColor,
                    mainImg: item.mainImg,
                    item: (index + 1)
                });
            });
         };

        $scope.slides = [];
        // get world gallery data
        addSlides($scope.slides);
        
        var currentPage = $scope.ons.navigator.getCurrentPage();
        var param = currentPage.options.param;
        $scope.currentWorldId = param.selectedWorld.world;
        $scope.currentLevelId = param.selectedWorld.levels[param.selectedLevelId ].id;
        
        switch ($scope.currentWorldId) {
            case 1:
                $(".level_complete_board").css("background-image", "url(img/gameboard.png)");
                $(".game_play_body").css("background-color", "#a1d790");
                break;
            case 2: 
                $(".level_complete_board").css("background-image", "url(img/gameboard1.png)");
                $(".game_play_body").css("background-color", "#e6d9ab");
                break;
            case 3:
                $(".level_complete_board").css("background-image", "url(img/gameboard2.png)");
                $(".game_play_body").css("background-color", "#ffffff");
                break;
            case 4:
                $(".level_complete_board").css("background-image", "url(img/gameboard3.png)");
                $(".game_play_body").css("background-color", "#adadad");
                break;
        }
        
        $scope.onListBtn = function(index){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            var selectedWorld = $scope.slides[$scope.currentWorldId -1];
            $scope.ons.navigator.pushPage("templates/select_level.html", selectedWorld);
        };
        
        $scope.onReplayBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            var option = {selectedWorld:$scope.gameConfig.worlds[$scope.currentWorldId -1] , selectedLevelId:$scope.currentLevelId-1, name:"gameplay"}
            $scope.ons.navigator.resetToPage("templates/game_play.html", option);
        };
        
        $scope.onVisitShopBtn = function(){
            $scope.playAudio("sound/Buton version B.mp3", 1);
            $scope.playAudio("sound/Buton version B.mp3", 1);
            appNavigator.pushPage('templates/shop.html');
        };
        
        $timeout(function(){
            $scope.clearLevelTimer();
            if (localStorageService.get("life") &&  localStorageService.get("life") != null && localStorageService.get("life") != "") {
                var lives_count = parseInt(localStorageService.get("life"));
                lives_count--;
                localStorageService.add("life", lives_count);
                
                if (lives_count <1) {
                    var now = new Date().getTime(),
                    _30_min_from_now = new Date(now + 30 * 60 * 1000);

                    cordova.plugins.notification.local.schedule({
                        id: 101,
                        title: '',
                        text: 'KA-POW, you\'re back in the game. Play now!',
                        at: _30_min_from_now,
                        sound: '',
                        badge: 1
                    });
                 
                 localStorage.setItem("expiredTime", new Date().getTime());
                }
            }
        });
        //$scope.initCompleteOneTileBtn();
    });
    
    // game play Controller
    app.controller('GamePlayController', function($scope, $timeout, localStorageService) {
 
        var gameplay_sound = setInterval(function(){
            if ($scope.m_sound) {
                $scope.m_sound.getCurrentPosition(
                    function(position){
                        if (position == -1) {
                            $scope.playAudio("sound/Tile Time Level Screen OK .mp3", -1); 
                        }
                    },
                    function(error){console.log(erro);}
                );
            }else{
                $scope.playAudio("sound/Tile Time Level Screen OK .mp3", -1);  
            }
        }, 1000);
        
        var currentPage = $scope.ons.navigator.getCurrentPage();
        var param = currentPage.options;

        // get config data 
        $scope.currentTileOrder = param.selectedWorld.tileOrder;
        $scope.currentTiles = param.selectedWorld.levels[param.selectedLevelId].tiles;
        $scope.currentTileArray = param.selectedWorld.levels[param.selectedLevelId].tileArray;
        $scope.currentWorldId = param.selectedWorld.world;
        $scope.currentLevelId = param.selectedWorld.levels[param.selectedLevelId ].id;

        var rememberTime = param.selectedWorld.levels[param.selectedLevelId].rememberTime;
        var playTime = param.selectedWorld.levels[param.selectedLevelId].playTime;
        
        $scope.lives_count = 0;
        
        if (localStorageService.get("life") &&  localStorageService.get("life") != null && localStorageService.get("life") != "") {
                $scope.lives_count = parseInt(localStorageService.get("life"));
                
                if ($scope.lives_count <1) {
                    $scope.initTimerCounter();
                    $scope.stopLevelTimer();
                    $scope.clearLevelTimer();
                    clearInterval(gameplay_sound);
                    appNavigator.pushPage('templates/more_live.html', {animation:'fade'});
                    return;
                }
        }
        
        
        switch ($scope.currentWorldId) {
            case 1:
                $(".game_board").css("background-image", "url(img/gameboard.png)");
                $(".game_play_body").css("background-color", "#a1d790");
                break;
            case 2: 
                $(".game_board").css("background-image", "url(img/gameboard1.png)");
                $(".game_play_body").css("background-color", "#e6d9ab");
                break;
            case 3:
                $(".game_board").css("background-image", "url(img/gameboard2.png)");
                $(".game_play_body").css("background-color", "#ffffff");
                break;
            case 4:
                $(".game_board").css("background-image", "url(img/gameboard3.png)");
                $(".game_play_body").css("background-color", "#adadad");
                break;
        }
/*                
        // show how_to_play page
        if (localStorageService.get("first_play") == null || localStorageService.get("first_play") == "" ) {
            $timeout(function(){
                $scope.initTimerCounter();
                $scope.stopLevelTimer();
                $scope.clearLevelTimer();
                localStorageService.add("first_play", "played");
                $scope.ons.navigator.pushPage("templates/how_to_play.html", {animation: 'lift'});
            }, rememberTime*1000+500);
        }
*/
        // init gameTimer
        $scope.initTimerCounter();
        $scope.setPlayTime(playTime);
        
        // init tile board
        $scope.IsTwoTiles = false;
        $scope.IsThreeTiles = false;
        $scope.IsFourTiles = false;
        $scope.IsFiveTiles = false;
        $scope.IsSixTiles = false;

                
        var clickedClockBoost = false;
        var clickedSeeArrangementBoost = false;
        var clickedOneTileBoost = false;
        
        switch ($scope.currentTiles) {
            case 2:
                $timeout( function(){$(".tileA").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                $timeout( function(){$(".tileB").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                //show tiles to remember
                $timeout(function(){
                    $(".tileA").css("backgroundImage", 'url("")'); 
                    $(".tileB").css("backgroundImage", 'url("")');
                    clickedOneTileBoost = true;
                    if ($scope.timerList.length == 0) {
                        $scope.startLevelTimer();              
                    }
                }, rememberTime*1000);
                $scope.IsTwoTiles = true;
                break;
            case 3:
                $timeout( function(){$(".tileC").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                $timeout( function(){$(".tileD").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                $timeout( function(){$(".tileE").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                $timeout(function(){
                    $(".tileC").css("backgroundImage", 'url("")'); 
                    $(".tileD").css("backgroundImage", 'url("")');
                    $(".tileE").css("backgroundImage", 'url("")');
                    clickedOneTileBoost = true;
                    if ($scope.timerList.length == 0) {
                        $scope.startLevelTimer();              
                    }
                }, rememberTime*1000);
                $scope.IsThreeTiles = true;
                break;
            case 4:
                $timeout( function(){$(".tileF").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                $timeout( function(){$(".tileG").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                $timeout( function(){$(".tileH").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                $timeout( function(){$(".tileI").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                $timeout(function(){
                    $(".tileF").css("backgroundImage", 'url("")'); 
                    $(".tileG").css("backgroundImage", 'url("")');
                    $(".tileH").css("backgroundImage", 'url("")');
                    $(".tileI").css("backgroundImage", 'url("")');
                    clickedOneTileBoost = true;
                    if ($scope.timerList.length == 0) {
                        $scope.startLevelTimer();              
                    }
                }, rememberTime*1000);
                $scope.IsFourTiles = true;
                break;
            case 5:
                $timeout( function(){$(".tileJ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                $timeout( function(){$(".tileK").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                $timeout( function(){$(".tileL").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                $timeout( function(){$(".tileM").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                $timeout( function(){$(".tileN").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[4]+'.png")'); });
                $timeout(function(){
                    $(".tileJ").css("backgroundImage", 'url("")'); 
                    $(".tileK").css("backgroundImage", 'url("")');
                    $(".tileL").css("backgroundImage", 'url("")');
                    $(".tileM").css("backgroundImage", 'url("")');
                    $(".tileN").css("backgroundImage", 'url("")');
                    clickedOneTileBoost = true;
                    if ($scope.timerList.length == 0) {
                        $scope.startLevelTimer();              
                    }
                }, rememberTime*1000);
                $scope.IsFiveTiles = true;
                break;
            case 6:
                $timeout( function(){$(".tileO").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                $timeout( function(){$(".tileP").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                $timeout( function(){$(".tileQ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                $timeout( function(){$(".tileR").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                $timeout( function(){$(".tileS").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[4]+'.png")'); });
                $timeout( function(){$(".tileT").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[5]+'.png")'); });
                $timeout(function(){
                    $(".tileO").css("backgroundImage", 'url("")'); 
                    $(".tileP").css("backgroundImage", 'url("")');
                    $(".tileQ").css("backgroundImage", 'url("")');
                    $(".tileR").css("backgroundImage", 'url("")');
                    $(".tileS").css("backgroundImage", 'url("")');
                    $(".tileT").css("backgroundImage", 'url("")');
                    clickedOneTileBoost = true;
                    if ($scope.timerList.length == 0) {
                        $scope.startLevelTimer();              
                    }
                }, rememberTime*1000);
                $scope.IsSixTiles = true;
                break;                
        }
        
        // get selected image index
        function getImageIndex(str){
            var firstIndex = str.lastIndexOf('/');
            var secondIndex = str.lastIndexOf('.');
            var length = secondIndex - firstIndex;
            return str.substr(firstIndex +1, length-1);
        }
        
        // check selected Images.
        function checkSelectedImages(firstImg, secondImg, thirdImg, fourthImg, fiveImg, sixthImg)
        {
            switch ($scope.currentTiles) {
            case 2:
                if ($scope.currentTileArray[0] == firstImg && $scope.currentTileArray[1] == secondImg) {
                    $scope.initTimerCounter();
                    $scope.stopLevelTimer();
                    $scope.clearLevelTimer();
                    
                    if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId]) {
                        if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].id < 11) {
                            $scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].complete = true;
                        }
                    }
                    localStorageService.add("gameConfig", JSON.stringify($scope.gameConfig));                    
                    clearInterval(gameplay_sound);
                    
                    if ($scope.currentLevelId == 10) {
                        $scope.ons.navigator.pushPage("templates/world_complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }else{
                        $scope.ons.navigator.pushPage("templates/complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }
                }
                break;
            case 3:
                if ($scope.currentTileArray[0] == firstImg && $scope.currentTileArray[1] == secondImg && $scope.currentTileArray[2] == thirdImg) {
                    $scope.initTimerCounter();
                    $scope.stopLevelTimer();
                    $scope.clearLevelTimer();
                    
                    if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId]) {
                        if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].id < 11) {
                            $scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].complete = true;
                        }
                    }
                    localStorageService.add("gameConfig", JSON.stringify($scope.gameConfig));
                    clearInterval(gameplay_sound);                    
                    if ($scope.currentLevelId == 10) {
                        $scope.ons.navigator.pushPage("templates/world_complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }else{
                        $scope.ons.navigator.pushPage("templates/complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }
                }
                break;
            case 4:
                if ($scope.currentTileArray[0] == firstImg && $scope.currentTileArray[1] == secondImg && $scope.currentTileArray[2] == thirdImg && $scope.currentTileArray[3] == fourthImg) {
                    $scope.initTimerCounter();
                    $scope.stopLevelTimer();
                    $scope.clearLevelTimer();
                    
                    if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId]) {
                        if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].id < 11) {
                            $scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].complete = true;
                        }
                    }                    
                    
                    localStorageService.add("gameConfig", JSON.stringify($scope.gameConfig));
                    clearInterval(gameplay_sound);                    
                    if ($scope.currentLevelId == 10) {
                        $scope.ons.navigator.pushPage("templates/world_complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }else{
                        $scope.ons.navigator.pushPage("templates/complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }
                }
                break;
            case 5:
                if ($scope.currentTileArray[0] == firstImg && $scope.currentTileArray[1] == secondImg && $scope.currentTileArray[2] == thirdImg && $scope.currentTileArray[3] == fourthImg && $scope.currentTileArray[4] == fiveImg) {
                    $scope.initTimerCounter();
                    $scope.stopLevelTimer();
                    $scope.clearLevelTimer();
                    
                    if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId]) {
                        if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].id < 11) {
                            $scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].complete = true;
                        }
                    }
                    localStorageService.add("gameConfig", JSON.stringify($scope.gameConfig));
                    clearInterval(gameplay_sound);                    
                    if ($scope.currentLevelId == 10) {
                        $scope.ons.navigator.pushPage("templates/world_complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }else{
                        $scope.ons.navigator.pushPage("templates/complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }
                }
                break;
            case 6:
                if ($scope.currentTileArray[0] == firstImg && $scope.currentTileArray[1] == secondImg && $scope.currentTileArray[2] == thirdImg && $scope.currentTileArray[3] == fourthImg && $scope.currentTileArray[4] == fiveImg && $scope.currentTileArray[5] == sixthImg) {
                    $scope.initTimerCounter();
                    $scope.stopLevelTimer();
                    $scope.clearLevelTimer();
                    
                    if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId]) {
                        if ($scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].id < 11) {
                            $scope.gameConfig.worlds[$scope.currentWorldId-1].levels[$scope.currentLevelId].complete = true;
                        }
                    }
                    localStorageService.add("gameConfig", JSON.stringify($scope.gameConfig));
                    clearInterval(gameplay_sound);                    
                    if ($scope.currentLevelId == 10) {
                        $scope.ons.navigator.pushPage("templates/world_complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }else{
                        $scope.ons.navigator.pushPage("templates/complete.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }
                }
                break;
            }
        }

        // when tiles is 2, handle click events.
        var TileAClicks = 0;
        $scope.onClickTileA = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }                
            }
            
            if (TileAClicks > $scope.currentTileOrder.length-1) {
               TileAClicks = 0;
            }
            $(".tileA").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileAClicks]+'")');
            
            $scope.checkLevelComplte();
            TileAClicks ++;
        };
        
        var TileBClicks = 0;
        $scope.onClickTileB = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileBClicks > $scope.currentTileOrder.length-1) {
               TileBClicks = 0;
            }
            $(".tileB").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileBClicks]+'")');
            $scope.checkLevelComplte();
            TileBClicks ++;
        };
        
        // when tiles is 3, handle click events.
        var TileCClicks = 0;
        $scope.onClickTileC = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileCClicks > $scope.currentTileOrder.length-1) {
               TileCClicks = 0;
            }
            $(".tileC").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileCClicks]+'")');
            $scope.checkLevelComplte();
            TileCClicks ++;
        };
        
        var TileDClicks = 0;
        $scope.onClickTileD = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileDClicks > $scope.currentTileOrder.length-1) {
               TileDClicks = 0;
            }
            $(".tileD").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileDClicks]+'")');
            $scope.checkLevelComplte();
            TileDClicks ++;
        };
        
        var TileEClicks = 0;
        $scope.onClickTileE = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileEClicks > $scope.currentTileOrder.length-1) {
               TileEClicks = 0;
            }
            $(".tileE").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileEClicks]+'")');
            $scope.checkLevelComplte();
            TileEClicks ++;
        };
        
        // when tiles is 4, handle click events.
        var TileFClicks = 0;
        $scope.onClickTileF = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileFClicks > $scope.currentTileOrder.length-1) {
               TileFClicks = 0;
            }
            $(".tileF").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileFClicks]+'")');
            $scope.checkLevelComplte();
            TileFClicks ++;
        };
        
        var TileGClicks = 0;
        $scope.onClickTileG = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileGClicks > $scope.currentTileOrder.length-1) {
               TileGClicks = 0;
            }
            $(".tileG").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileGClicks]+'")');
            $scope.checkLevelComplte();
            TileGClicks ++;
        };
        
        var TileHClicks = 0;
        $scope.onClickTileH = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileHClicks > $scope.currentTileOrder.length-1) {
               TileHClicks = 0;
            }
            $(".tileH").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileHClicks]+'")');
            $scope.checkLevelComplte();
            TileHClicks ++;
        };
        
        var TileIClicks = 0;
        $scope.onClickTileI = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileIClicks > $scope.currentTileOrder.length-1) {
               TileIClicks = 0;
            }
            $(".tileI").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileIClicks]+'")');
            $scope.checkLevelComplte();
            TileIClicks ++;
        };
        
        // when tiles is 5, handle click events.
        var TileJClicks = 0;
        $scope.onClickTileJ = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileJClicks > $scope.currentTileOrder.length-1) {
               TileJClicks = 0;
            }
            $(".tileJ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileJClicks]+'")');
            $scope.checkLevelComplte();
            TileJClicks ++;
        };
        
        var TileKClicks = 0;
        $scope.onClickTileK = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileKClicks > $scope.currentTileOrder.length-1) {
               TileKClicks = 0;
            }
            $(".tileK").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileKClicks]+'")');
            $scope.checkLevelComplte();
            TileKClicks ++;
        };
        
        var TileLClicks = 0;
        $scope.onClickTileL = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileLClicks > $scope.currentTileOrder.length-1) {
               TileLClicks = 0;
            }
            $(".tileL").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileLClicks]+'")');
            $scope.checkLevelComplte();
            TileLClicks ++;
        };
        
        var TileMClicks = 0;
        $scope.onClickTileM = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileMClicks > $scope.currentTileOrder.length-1) {
               TileMClicks = 0;
            }
            $(".tileM").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileMClicks]+'")');
            $scope.checkLevelComplte();
            TileMClicks ++;
        };
        
        var TileNClicks = 0;
        $scope.onClickTileN = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileNClicks > $scope.currentTileOrder.length-1) {
               TileNClicks = 0;
            }
            $(".tileN").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileNClicks]+'")');
            $scope.checkLevelComplte();
            TileNClicks ++;
        };
        
        // when tiles is 6, handle click events.
        var TileOClicks = 0;
        $scope.onClickTileO = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileOClicks > $scope.currentTileOrder.length-1) {
               TileOClicks = 0;
            }
            $(".tileO").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileOClicks]+'")');
            $scope.checkLevelComplte();
            TileOClicks ++;
        };
        
        var TilePClicks = 0;
        $scope.onClickTileP = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TilePClicks > $scope.currentTileOrder.length-1) {
               TilePClicks = 0;
            }
            $(".tileP").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TilePClicks]+'")');
            $scope.checkLevelComplte();
            TilePClicks ++;
        };
        
        var TileQClicks = 0;
        $scope.onClickTileQ = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileQClicks > $scope.currentTileOrder.length-1) {
               TileQClicks = 0;
            }
            $(".tileQ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileQClicks]+'")');
            $scope.checkLevelComplte();
            TileQClicks ++;
        };
        
        var TileRClicks = 0;
        $scope.onClickTileR = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileRClicks > $scope.currentTileOrder.length-1) {
               TileRClicks = 0;
            }
            $(".tileR").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileRClicks]+'")');
            $scope.checkLevelComplte();
            TileRClicks ++;
        };
        
        var TileSClicks = 0;
        $scope.onClickTileS = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileSClicks > $scope.currentTileOrder.length-1) {
               TileSClicks = 0;
            }
            $(".tileS").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileSClicks]+'")');
            $scope.checkLevelComplte();
            TileSClicks ++;
        };
        
        var TileTClicks = 0;
        $scope.onClickTileT = function(){
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }
            }
            
            if (TileTClicks > $scope.currentTileOrder.length-1) {
               TileTClicks = 0;
            }
            $(".tileT").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileOrder[TileTClicks]+'")');
            $scope.checkLevelComplte();
            TileTClicks ++;
        };
        
        // timer bar init
        $timeout(function(){
            $("#progressbar").progressbar({
                value: 100,
                change: function() {
                    if($scope.counter < 0.5)
                    {
                        $scope.initTimerCounter();
                        $scope.stopLevelTimer();
                        $scope.clearLevelTimer();
                        clearInterval(gameplay_sound);
                        $scope.ons.navigator.pushPage("templates/level_failed.html", {param:param, animation: 'lift', name:"gamecomplete"});
                    }                    
                },
                complete: function() {
                    
                }
            });
            
            $scope.clearLevelTimer();
        });
        
        $scope.onGamePause = function(){
            $scope.clearLevelTimer();
            $scope.ons.navigator.pushPage("templates/pause.html", {animation: 'fade'});
        };
        
        $scope.seeArrangement = function(){
            
            if ($scope.timerList.length == 0) {
                if (clickedClockBoost == false || clickedSeeArrangementBoost == true) {
                    return;
                }                
            }
            clickedSeeArrangementBoost = true;
            if($scope.currentSneakyPeak <= 0 )
            {
                return;
            }else{
                $scope.clickSeeArrangement();
            }
            $scope.playAudio("sound/Ding.mp3", 1);
            
            $scope.clearLevelTimer();
            switch ($scope.currentTiles) {
                case 2:
                    var currentTileA = $(".tileA").css("backgroundImage");
                    var currentTileB = $(".tileB").css("backgroundImage");
                    $timeout( function(){$(".tileA").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                    $timeout( function(){$(".tileB").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                    //show tiles to remember
                    $timeout(function(){
                        $(".tileA").css("backgroundImage", currentTileA); 
                        $(".tileB").css("backgroundImage", currentTileB);
                        clickedSeeArrangementBoost = false;
                        if ($scope.timerList.length == 0) {
                            $scope.startLevelTimer();              
                        }
                    }, 2*1000);
                    break;
                case 3:
                    var currentTileC = $(".tileC").css("backgroundImage");
                    var currentTileD = $(".tileD").css("backgroundImage");
                    var currentTileE = $(".tileE").css("backgroundImage");
                    $timeout( function(){$(".tileC").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                    $timeout( function(){$(".tileD").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                    $timeout( function(){$(".tileE").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                    $timeout(function(){
                        $(".tileC").css("backgroundImage", currentTileC); 
                        $(".tileD").css("backgroundImage", currentTileD);
                        $(".tileE").css("backgroundImage", currentTileE);
                        clickedSeeArrangementBoost = false;
                        if ($scope.timerList.length == 0) {
                            $scope.startLevelTimer();              
                        }
                    }, 2*1000);
                    break;
                case 4:
                    var currentTileF = $(".tileF").css("backgroundImage");
                    var currentTileG = $(".tileG").css("backgroundImage");
                    var currentTileH = $(".tileH").css("backgroundImage");
                    var currentTileI = $(".tileI").css("backgroundImage");
                    $timeout( function(){$(".tileF").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                    $timeout( function(){$(".tileG").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                    $timeout( function(){$(".tileH").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                    $timeout( function(){$(".tileI").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                    $timeout(function(){
                        $(".tileF").css("backgroundImage", currentTileF); 
                        $(".tileG").css("backgroundImage", currentTileG);
                        $(".tileH").css("backgroundImage", currentTileH);
                        $(".tileI").css("backgroundImage", currentTileI);
                        clickedSeeArrangementBoost = false;
                        if ($scope.timerList.length == 0) {
                            $scope.startLevelTimer();              
                        }
                    }, 2*1000);
                    break;
                case 5:
                    var currentTileJ = $(".tileJ").css("backgroundImage");
                    var currentTileK = $(".tileK").css("backgroundImage");
                    var currentTileL = $(".tileL").css("backgroundImage");
                    var currentTileM = $(".tileM").css("backgroundImage");
                    var currentTileN = $(".tileN").css("backgroundImage");
                    $timeout( function(){$(".tileJ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                    $timeout( function(){$(".tileK").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                    $timeout( function(){$(".tileL").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                    $timeout( function(){$(".tileM").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                    $timeout( function(){$(".tileN").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[4]+'.png")'); });
                    $timeout(function(){
                        $(".tileJ").css("backgroundImage", currentTileJ); 
                        $(".tileK").css("backgroundImage", currentTileK);
                        $(".tileL").css("backgroundImage", currentTileL);
                        $(".tileM").css("backgroundImage", currentTileM);
                        $(".tileN").css("backgroundImage", currentTileN);
                        clickedSeeArrangementBoost = false;
                        if ($scope.timerList.length == 0) {
                            $scope.startLevelTimer();              
                        }
                    }, 2*1000);
                    break;
                case 6:
                    var currentTileO = $(".tileO").css("backgroundImage");
                    var currentTileP = $(".tileP").css("backgroundImage");
                    var currentTileQ = $(".tileQ").css("backgroundImage");
                    var currentTileR = $(".tileR").css("backgroundImage");
                    var currentTileS = $(".tileS").css("backgroundImage");
                    var currentTileT = $(".tileT").css("backgroundImage");
                    $timeout( function(){$(".tileO").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                    $timeout( function(){$(".tileP").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                    $timeout( function(){$(".tileQ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                    $timeout( function(){$(".tileR").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                    $timeout( function(){$(".tileS").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[4]+'.png")'); });
                    $timeout( function(){$(".tileT").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[5]+'.png")'); });
                    $timeout(function(){
                        $(".tileO").css("backgroundImage", currentTileO); 
                        $(".tileP").css("backgroundImage", currentTileP);
                        $(".tileQ").css("backgroundImage", currentTileQ);
                        $(".tileR").css("backgroundImage", currentTileR);
                        $(".tileS").css("backgroundImage", currentTileS);
                        $(".tileT").css("backgroundImage", currentTileT);
                        clickedSeeArrangementBoost = false;
                        if ($scope.timerList.length == 0) {
                            $scope.startLevelTimer();              
                        }
                    }, 2*1000);
                    break;                
            }
        }

        $scope.addMoreTime = function(){
            if ($scope.timerList.length == 0) {
                return;               
            }
            if($scope.currentClockBoost <= 0 )
            {
                return;
            }else{
                $scope.clickMoreTime();
            }
            $scope.playAudio("sound/Tick Clock version A.mp3", 1);
            $scope.clearLevelTimer();

            clickedClockBoost = true;
            $timeout(function(){
                clickedClockBoost = false;

                if ($scope.timerList.length == 0) {
                    console.log($scope.ons.navigator.getCurrentPage().options.name);
                    if ($scope.ons.navigator.getCurrentPage().options.name == "gameplay" && $scope.getTimerCounter() != 100) {
                        $scope.startLevelTimer();
                    }                                 
                }
            }, 3*1000);
        }
        
        $scope.completeOneTile = function(){
            if ($scope.timerList.length == 0) {
                if (clickedSeeArrangementBoost == true) {
                    return;
                }                
            }
            if($scope.currentTileBuster <= 0 )
            {
                return;
            }
            
            switch ($scope.currentTiles) {
                case 2:
                    if (getImageIndex($(".tileA").css("backgroundImage")) != $scope.currentTileArray[0]) {
                        $timeout( function(){$(".tileA").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileB").css("backgroundImage")) != $scope.currentTileArray[1]) {
                        $timeout( function(){$(".tileB").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    break;
                case 3:
                    if (getImageIndex($(".tileC").css("backgroundImage")) != $scope.currentTileArray[0]) {
                        $timeout( function(){$(".tileC").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileD").css("backgroundImage")) != $scope.currentTileArray[1]) {
                        $timeout( function(){$(".tileD").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileE").css("backgroundImage")) != $scope.currentTileArray[2]) {
                        $timeout( function(){$(".tileE").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    break;
                case 4:
                    if (getImageIndex($(".tileF").css("backgroundImage")) != $scope.currentTileArray[0]) {
                        $timeout( function(){$(".tileF").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileG").css("backgroundImage")) != $scope.currentTileArray[1]) {
                        $timeout( function(){$(".tileG").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileH").css("backgroundImage")) != $scope.currentTileArray[2]) {
                        $timeout( function(){$(".tileH").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileI").css("backgroundImage")) != $scope.currentTileArray[3]) {
                        $timeout( function(){$(".tileI").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    break;
                case 5:
                    if (getImageIndex($(".tileJ").css("backgroundImage")) != $scope.currentTileArray[0]) {
                        $timeout( function(){$(".tileJ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileK").css("backgroundImage")) != $scope.currentTileArray[1]) {
                        $timeout( function(){$(".tileK").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileL").css("backgroundImage")) != $scope.currentTileArray[2]) {
                        $timeout( function(){$(".tileL").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileM").css("backgroundImage")) != $scope.currentTileArray[3]) {
                        $timeout( function(){$(".tileM").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileN").css("backgroundImage")) != $scope.currentTileArray[4]) {
                        $timeout( function(){$(".tileN").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[4]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    break;
                case 6:
                    if (getImageIndex($(".tileO").css("backgroundImage")) != $scope.currentTileArray[0]) {
                        $timeout( function(){$(".tileO").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[0]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileP").css("backgroundImage")) != $scope.currentTileArray[1]) {
                        $timeout( function(){$(".tileP").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[1]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileQ").css("backgroundImage")) != $scope.currentTileArray[2]) {
                        $timeout( function(){$(".tileQ").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[2]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileR").css("backgroundImage")) != $scope.currentTileArray[3]) {
                        $timeout( function(){$(".tileR").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[3]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileS").css("backgroundImage")) != $scope.currentTileArray[4]) {
                        $timeout( function(){$(".tileS").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[4]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    if (getImageIndex($(".tileT").css("backgroundImage")) != $scope.currentTileArray[5]) {
                        $timeout( function(){$(".tileT").css("backgroundImage", 'url("img/tiles/'+$scope.currentTileArray[5]+'.png")'); });
                        $scope.clickCompleteOneTile();
                        $scope.playAudio("sound/Hammer 3 feedback.mp3", 1);
                        $scope.checkLevelComplte();
                        break;
                    }
                    break;                
            }
            //$scope.onClickCompleteOneTileBtn();
        }
        
        $scope.checkLevelComplte = function(){
            switch ($scope.currentTiles) {
            case 2:
                if ($(".tileB").css("backgroundImage") != "none" && $(".tileA").css("backgroundImage") !="none") {
                    $timeout(function(){
                        checkSelectedImages(getImageIndex($(".tileA").css("backgroundImage")),
                                            getImageIndex($(".tileB").css("backgroundImage")));
                    });
                }
                break;
            case 3:
                if ($(".tileC").css("backgroundImage") != "none" && $(".tileD").css("backgroundImage") !="none" && $(".tileE").css("backgroundImage") !="none") {
                    $timeout(function(){
                        checkSelectedImages(getImageIndex($(".tileC").css("backgroundImage")),
                                            getImageIndex($(".tileD").css("backgroundImage")),
                                            getImageIndex($(".tileE").css("backgroundImage")));
                    });
                }
                break;
            case 4:
                if ($(".tileF").css("backgroundImage") != "none" && $(".tileG").css("backgroundImage") !="none" && $(".tileH").css("backgroundImage") !="none" && $(".tileI").css("backgroundImage") !="none") {
                    $timeout(function(){
                        checkSelectedImages(getImageIndex($(".tileF").css("backgroundImage")),
                                            getImageIndex($(".tileG").css("backgroundImage")),
                                            getImageIndex($(".tileH").css("backgroundImage")),
                                            getImageIndex($(".tileI").css("backgroundImage")));
                    });
                }
                break;
            case 5:
                if ($(".tileJ").css("backgroundImage") != "none" && $(".tileK").css("backgroundImage") !="none" && $(".tileL").css("backgroundImage") !="none" && $(".tileM").css("backgroundImage") !="none" && $(".tileN").css("backgroundImage") !="none") {
                    $timeout(function(){
                        checkSelectedImages(getImageIndex($(".tileJ").css("backgroundImage")),
                                            getImageIndex($(".tileK").css("backgroundImage")),
                                            getImageIndex($(".tileL").css("backgroundImage")),
                                            getImageIndex($(".tileM").css("backgroundImage")),
                                            getImageIndex($(".tileN").css("backgroundImage")));
                    });
                }
                break;
            case 6:
                if ($(".tileO").css("backgroundImage") != "none" && $(".tileP").css("backgroundImage") !="none" && $(".tileQ").css("backgroundImage") !="none" && $(".tileR").css("backgroundImage") !="none" && $(".tileS").css("backgroundImage") !="none" && $(".tileT").css("backgroundImage") !="none") {
                    $timeout(function(){
                        checkSelectedImages(getImageIndex($(".tileO").css("backgroundImage")),
                                            getImageIndex($(".tileP").css("backgroundImage")),
                                            getImageIndex($(".tileQ").css("backgroundImage")),
                                            getImageIndex($(".tileR").css("backgroundImage")),
                                            getImageIndex($(".tileS").css("backgroundImage")),
                                            getImageIndex($(".tileT").css("backgroundImage")));
                    });
                }
                break;
            }    
        };
    });
    
    
    // Filter
    app.filter('partition', function($cacheFactory) {
          var arrayCache = $cacheFactory('partition');
          var filter = function(arr, size) {
            if (!arr) { return; }
            var newArr = [];
            for (var i=0; i<arr.length; i+=size) {
                newArr.push(arr.slice(i, i+size));        
            }
            var cachedParts;
            var arrString = JSON.stringify(arr);
            cachedParts = arrayCache.get(arrString+size); 
            if (JSON.stringify(cachedParts) === JSON.stringify(newArr)) {
              return cachedParts;
            }
            arrayCache.put(arrString+size, newArr);
            return newArr;
          };
          return filter;
        });


})();

// initialize the purchase plugin if available
initStore = function() {

    if (!window.store) {
        console.log('Store not available');
        return;
    }

    // Enable maximum logging level
    store.verbosity = store.DEBUG;

    // Inform the store of your products
    console.log('registerProducts');
    store.register({
        id:    'com.tileTime.sneaky5',
        alias: 'Sneaky 5',
        type:   store.CONSUMABLE
    });

    // When any product gets updated, refresh the HTML.
    store.when("product").updated(function (p) {
        //app.renderIAP(p);
        console.log(p);
    });

    // Log all errors
    store.error(function(error) {
        console.log('ERROR ' + error.code + ': ' + error.message);
    });

    // When purchase of an extra life is approved,
    // deliver it... by displaying logs in the console.
    store.when("Sneaky 5").approved(function (order) {
        console.log("You got an Sneaky 5!");
        order.finish();
    });

    // When store is ready, activate the "refresh" button;
    store.ready(function() {

    });

    store.refresh();
};
