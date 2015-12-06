var tileTimeApp = angular.module('tileTimeApp');

// Home Data: Home page configuration
tileTimeApp.factory('Data', function(){
    var data = {};
    
    data.items = [


    ]; 
    
    return data;
});

tileTimeApp.factory('GalleryData', function(){
    var data = {};
    
    data.items = [
        { 
            id: 1,
            src: 'img/forest.png',
            lock_src: 'img/forest.png',
            world: 'World 1',
            word: "forest",
            mainColor:"#63bc46",
            mainImg:"img/forest_bg.png"
        },
        { 
            id: 2,
            src: 'img/desert.png',
            lock_src: 'img/desert_lock.png',
            world: 'World 2',
            word: "desert",
            mainColor:"#c19f2e",
            mainImg:"img/desert_bg.png"
        },
        { 
            id: 3,
            src: 'img/snow.png',
            lock_src: 'img/snow_lock.png',
            world: 'World 3',
            word: "snow",
            mainColor:"#fff",
            mainImg:"img/snow_bg.png"
        },
        { 
            id: 4,
            src: 'img/volcano.png',
            lock_src: 'img/volcano_lock.png',
            world: 'World 4',
            word: "volcano",
            mainColor:"#333131",
            mainImg:"img/volcano_bg.png"
        }
    ]; 
    
    return data;
});
