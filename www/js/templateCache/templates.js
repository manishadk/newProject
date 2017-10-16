angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('disclaimerModal.html','\r\n  <ion-header-bar class="bar bar-header bar-positive" align-title="center">\r\n    \r\n    <!-- <button class="button button-clear button-icon ion-android-close" ng-click="disclaimerModal.hide()"></button> -->\r\n  \r\n\r\n  <h1 class="title">About</h1>\r\n</ion-header-bar>\r\n  <ion-body>\r\n  \t<h4>Cinemaghar</h4>\r\n  \t<p>Cinemaghar is an app developed to step-up the experience of watching Nepali movies online. Users don\'t have to spend their entire time remembering the names of movies they want to watch in order to search for them online. The app notifies user as and when any new movie is uploaded. We constantly update our content to stay current with Nepali Movie Industry. </p>\r\n    <h4>Disclaimer</h4>\r\n    <p>No copyright infringement intended. We don\'t post or own any of the media content made available to the users through this app. All materials used are property of their respective owners. We merely catagorize videos accessible in public domain like Youtube for easier and faster access to users. </p>\r\n  </ion-body>');
$templateCache.put('exclusive-list.html','<ion-view view-title={{movie.catagory}} >\r\n  hasdifhaosdifasodifhsad\r\n   <ion-header-bar align-title="center" class="bar-positive">\r\n  <div class="buttons">\r\n      <button class="button button-icon button-clear ion-ios-arrow-back" ng-click="homePage()"> </button>\r\n    </div>\r\n    <h1 class="title">{{catagory | capitalizeFirstLetter}}</h1>\r\n  </ion-header-bar>\r\n  <ion-content class="">\r\n  <!-- <label class="item item-input">\r\n    <i class="icon ion-search placeholder-icon"></i>\r\n    <input type="search" placeholder="Search">\r\n  </label> -->\r\n    <div class="list movieList arrow">\r\n\r\n    <ion-spinner icon="crescent" align="center" style="margin-left: auto; margin-right: auto; display:block;" ng-show="loading"></ion-spinner>\r\n\r\n    <a class="item item-thumbnail-left" ng-repeat=\'movie in allMovies\' href="#/player/exclusive/{{movie.id}}">\r\n      <img ng-src=\'http://www.cinemagharhd.com/banners/{{movie.banner_name}}\'>\r\n      <h2>{{movie.name |lowercase | capitalizeFirstLetter}}</h2>\r\n      <p class="tag"><span>Free</span><span>HD</span></p>\r\n      <p class="star">\r\n        <rating-div  rating=movie.Rating></rating-div>\r\n      </p>\r\n      </a>\r\n      </div>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('exclusivePlayer.html','<ion-view view-title="Cinemaghar Player">\r\n  <ion-header-bar align-title="center" class="bar-positive">\r\n     <div class="buttons">\r\n      <button class="button button-icon button-clear ion-ios-arrow-back" ng-click="myGoBack(movie)"> </button>\r\n    </div>\r\n\r\n    <h1 class="title">Cinemaghar Player</h1>\r\n    </ion-nav-bar>\r\n\r\n  </ion-header-bar>\r\n  <ion-content>\r\n    <div ng-click="playerExclusiveMovie()" style="background-image: url(\'http://www.cinemagharhd.com/exclusivePlayerBanners/{{movie.banner_name}}\')" id="exclusiveMoviePlayerBanner">\r\n      <button class="button button-clear">\r\n        <i class="ion-play">\r\n          <p>Play Movie</p>\r\n        </i>\r\n      </button>\r\n    </div>\r\n    <!--ion-spinner icon="crescent" align="center" style="margin-left: auto; margin-right: auto; display:block;" ng-show="loading"></ion-spinner-->\r\n    <div class="list videoDetails">\r\n      <div class="item item-text-wrap">\r\n        <h2>{{movie.name |lowercase | capitalizeFirstLetter}}</h2>\r\n        <p>{{movie.description}}</p>\r\n        <div class="text-right">\r\n          <p class="tag"><span>Free</span><span>HD</span></p>\r\n\r\n          <p class="star">\r\n            <rating-div rating=\'movie.Rating\'>\r\n\r\n          </rating-div></p>\r\n          <a href="" ng-click =\'trailer(movie)\' class="button button-small button-assertive">Watch Trailer </a> </div>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('home.html','<ion-view  view-title="Cinemaghar">\r\n  <ion-header-bar align-title="center" class="bar-positive">\r\n    <div class="buttons">\r\n      <button class="button button-icon button-clear ion-ios-information-outline" ng-click = "showDisclaimerModal()"> </button>\r\n    </div>\r\n    <h1 class="title">\r\n      <img class="appIcon" src="img/icon.png" style="" alt="">\r\n      CINEMAGHAR</h1>\r\n    <div class="buttons">\r\n      <button class="button button-clear button-icon ion-ios-search"  ng-click="searchModal.show()"></button>\r\n    </div>\r\n  </ion-header-bar>\r\n  <ion-content>\r\n  <ion-spinner icon="crescent" align="center" style="margin-left: auto; margin-right: auto; display:block;" ng-show="loading"></ion-spinner>\r\n    <ion-slide-box on-slide-changed="slideHasChanged($index)" auto-play="true" slide-interval="3000" does-continue="true">\r\n      <ion-slide ng-repeat="slide in sliderImages" ng-hide="loading">\r\n       <div class="box blue">\r\n          <a href="#/player/{{slide.movie_id}}" class="heroHeader">\r\n            <img ng-src="http://cinemagharhd.com/images/{{slide.image_name}}" alt="">\r\n            <div class="item" href="#">\r\n              <h2>Watch Now</h2>\r\n              <rating-div class="item-note" rating=\'slide.Rating\'></rating-div>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </ion-slide>\r\n    </ion-slide-box>\r\n    <div class="tsb-icons"  data-tab-menu data-ng-model="ui.tabview">\r\n      <div class="tsb-ic-wrp row">\r\n        <div class="col">\r\n          <a href="templates/tab-movie.html" class="icon ion-ios-recording">\r\n            <span>Movies</span>\r\n          </a>\r\n        </div>\r\n        <div class="col">\r\n          <a  href="templates/tab-short.html"  class="icon ion-ios-videocam">\r\n            <span>Short</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div data-ng-include="ui.tabview"> </div>\r\n\r\n</div>\r\n\r\n</ion-content>\r\n<ion-footer-bar class=" bar-positive">\r\n    <div class="socialIcons">\r\n        <span>Follow Us</span>\r\n        <a href="#" onclick="window.open(\'https://www.facebook.com/hdcinemaghar\',\'_system\',\'location=yes\')" class="socialIcon facebook">\r\n          <i class="icon ion-social-facebook"></i>\r\n        </a>\r\n        <a href="" onclick="window.open(\'https://www.twitter.com/cinemagharapp\',\'_system\',\'location=yes\')" class="socialIcon twitter">\r\n          <i class="icon ion-social-twitter"></i>\r\n        </a>\r\n        <a href="" onclick="window.open(\'https://www.instagram.com/cinemaghar\' ,\'_system\',\'location=yes\')" class="socialIcon instagram">\r\n          <i class="icon ion-social-instagram"></i>\r\n        </a>\r\n    </div>\r\n</ion-footer-bar>\r\n</ion-view>\r\n');
$templateCache.put('item-list.html','<ion-view view-title={{movie.catagory}} >\r\n  This one\r\n   <ion-header-bar align-title="center" class="bar-positive">\r\n  <div class="buttons">\r\n      <button class="button button-icon button-clear ion-ios-arrow-back" ng-click="homePage()"> </button>\r\n    </div>\r\n    <h1 class="title">{{catagory | capitalizeFirstLetter}}</h1>\r\n  </ion-header-bar>\r\n  <ion-content class="">\r\n  <!-- <label class="item item-input">\r\n    <i class="icon ion-search placeholder-icon"></i>\r\n    <input type="search" placeholder="Search">\r\n  </label> -->\r\n    <div class="list movieList arrow">\r\n\r\n    <ion-spinner icon="crescent" align="center" style="margin-left: auto; margin-right: auto; display:block;" ng-show="loading"></ion-spinner>\r\n\r\n    <a class="item item-thumbnail-left" ng-repeat=\'movie in allMovies\' href="#/player/{{movie.id}}">\r\n      <img ng-src=\'http://www.cinemagharhd.com/banners/{{movie.banner_name}}\'>\r\n      <h2>{{movie.name |lowercase | capitalizeFirstLetter}}</h2>\r\n      <p class="tag"><span>Free</span><span>HD</span></p>\r\n      <p class="star">\r\n        <rating-div  rating=movie.Rating></rating-div>\r\n      </p>\r\n      </a>\r\n      </div>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('menu.html','<ion-side-menus enable-menu-with-back-views="false">\r\n  <ion-side-menu-content drag-content="false">\r\n    <ion-nav-bar class="bar-stable bar-positive" align-title="center">\r\n      <ion-nav-back-button>\r\n      </ion-nav-back-button>\r\n\r\n      <ion-nav-buttons side="left">\r\n        <button\r\n              class="button button-icon button-clear ion-navicon"\r\n              menu-toggle="left">\r\n        </button>\r\n      </ion-nav-buttons>\r\n    </ion-nav-bar>\r\n    <ion-nav-view name="menuContent"></ion-nav-view>\r\n  </ion-side-menu-content>\r\n\r\n  <ion-side-menu side="left">\r\n    <ion-header-bar class="bar-stable">\r\n      <h1 class="title">Left</h1>\r\n    </ion-header-bar>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item menu-close ng-click="login()">\r\n          Login\r\n        </ion-item>\r\n        <ion-item menu-close href="#/app/search">\r\n          Search\r\n        </ion-item>\r\n        <ion-item menu-close href="#/app/browse">\r\n          Browse\r\n        </ion-item>\r\n        <ion-item menu-close href="#/app/playlists">\r\n          Playlists\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-side-menu>\r\n</ion-side-menus>\r\n');
$templateCache.put('player.html','<ion-view view-title="Cinemaghar Player">\r\n  <ion-header-bar align-title="center" class="bar-positive">\r\n     <div class="buttons">\r\n      <button class="button button-icon button-clear ion-ios-arrow-back" ng-click="myGoBack(play, movie)"> </button>\r\n    </div>\r\n\r\n    <h1 class="title">Cinemaghar Player</h1>\r\n    </ion-nav-bar>\r\n\r\n  </ion-header-bar>\r\n  <ion-content>\r\n    <!--ion-spinner icon="crescent" align="center" style="margin-left: auto; margin-right: auto; display:block;" ng-show="loading"></ion-spinner-->\r\n    <you-tube play = "play" play_pause = "moviePlayer" video_link="{{movie.video_link}}" movie_name="{{movie.name |lowercase | capitalizeFirstLetter}}" description="{{movie.description}}" spinner="loading"></you-tube>\r\n    <!--iframe id=\'player\' type=\'text/html\' width=\'100%\' height=\'300\' ng-src="{{movie.video_link}}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe-->\r\n    <div class="list videoDetails">\r\n      <div class="item item-text-wrap">\r\n        <h2>{{movie.name |lowercase | capitalizeFirstLetter}}</h2>\r\n        <p>{{movie.description}}</p>\r\n        <div class="text-right">\r\n          <p class="tag"><span>Free</span><span>HD</span></p>\r\n\r\n          <p class="star">\r\n            <rating-div rating=\'movie.Rating\'>\r\n\r\n          </rating-div></p>\r\n          <a href="" ng-click =\'trailer(movie)\' class="button button-small button-assertive">Watch Trailer </a> </div>\r\n      </div>\r\n    </div>\r\n    <!--<div class="list movieList arrow">\r\n      <div class="item item-divider"> suggested videos </div>\r\n      <a class="item item-thumbnail-left" ng-click="playVideo()"> <img src="img/latest.jpg">\r\n      <h2>Pretty Hate Machine</h2>\r\n      <p class="tag"><span>Free</span><span>HD</span></p>\r\n      <p class="star"><i class="icon ion-ios-star"></i><i class="icon ion-ios-star"></i><i class="icon ion-ios-star"></i><i class="icon ion-ios-star-outline"></i><i class="icon ion-ios-star-outline"></i></p>\r\n      </a> </div>\r\n    -->\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('ratingModal.html','<div class="modal modal-fullscreen transparent">\r\n  <div class="modal-content-center">\r\n    <div class="dialogBox">\r\n      <div class="popup-title-bar">\r\n        <div class="close-button-wrapper">\r\n          <i class="modal-close-button ion-close-circled" ng-click="closeButtonClicked()">\r\n          </i>\r\n        </div>\r\n      </div>\r\n      <div class="modal-head">\r\n        <h3 class="popup-title">\r\n          <p>How would you rate this movie? </p>\r\n        </h3>\r\n      </div>\r\n      <div class="popup-body">\r\n        <rating-selection-stars rating = "rating.value"></rating-stars>\r\n      </div>\r\n      <div class="popup-buttons">\r\n        <button class="button button-positive" ng-click="ratingDone()">Rate it!</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n');
$templateCache.put('searchModal.html','<ion-modal-view>\r\n  <ion-header-bar class="bar bar-header bar-positive" align-title="center">\r\n    <h1 class="title">Search</h1>\r\n    <button class="button button-clear button-icon ion-android-close" ng-click="searchModal.hide()"></button>\r\n  </ion-header-bar>\r\n  <ion-content style="background-color: #262e3b">\r\n    <div class="bar bar-header item-input-inset bar-positive">\r\n      <label class="item-input-wrapper"> <i class="icon ion-ios-search placeholder-icon"></i>\r\n        <input type="search" placeholder="Search" ng-model="search.name">\r\n      </label>\r\n      <button class="button button-clear"> Cancel </button>\r\n    </div>\r\n    <div class="list movieList arrow">\r\n      <div class="item item-divider"> found videos </div>\r\n\r\n      <a class="item item-thumbnail-left" ng-repeat=\'movie in allMovies | filter:search\' ng-click="searchModal.hide()" href="#/player/{{movie.id}}">\r\n    <img ng-src=\'http://www.cinemagharhd.com/banners/{{movie.banner_name}}\'>\r\n      <h2>{{movie.name}}</h2>\r\n      <p class="tag"><span>Free</span><span>HD</span></p>\r\n      <p class=\'star\'><rating-div rating=movie.Rating></rating-div>\r\n      </p>\r\n      </a>\r\n      <!-- <a class="item item-thumbnail-left" ng-click="playVideo()"> <img src="img/latest.jpg">\r\n      <h2>Pretty Hate Machine</h2>\r\n      <p class="tag"><span>Free</span><span>HD</span></p>\r\n      <p class="star"><i class="icon ion-ios-star"></i><i class="icon ion-ios-star"></i><i class="icon ion-ios-star"></i><i class="icon ion-ios-star-outline"></i><i class="icon ion-ios-star-outline"></i></p>\r\n      </a> --> \r\n    </div>\r\n  </ion-content>\r\n</ion-modal-view>\r\n');
$templateCache.put('tab-movie.html','<div class="movieContainer">\r\n  <div class="row">\r\n    <a class="col thumb" href="#/itemList/exclusive">\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img src="http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages.Exclusive}}" alt=""> </div>\r\n        <div class="titleThumb">Exclusive <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a>\r\n    <a class="col thumb" href="#/itemList/latest">\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img ng-src=\'http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages.Latest}}\' alt=""> </div>\r\n        <div class="titleThumb">Latest <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class="row">\r\n    <a class="col thumb" href="#/itemList/comedy">\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img ng-src="http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages.Comedy}}" alt=""> </div>\r\n        <div class="titleThumb">Comedy <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a>\r\n    <a class="col thumb" href=\'#/itemList/action\'>\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img src="http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages.Action}}" alt=""> </div>\r\n        <div class="titleThumb">Action <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class="row">\r\n    <a class="col thumb" href="#/itemList/love story">\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img src="http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages[\'Love Story\']}}" alt=""> </div>\r\n        <div class="titleThumb">Love Story <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a>\r\n    <a class="col thumb" href="#/itemList/drama">\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img src="http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages.Drama}}" alt=""> </div>\r\n        <div class="titleThumb">Drama <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a>\r\n\r\n    <!--a class="col thumb" href="#/itemList/foreign">\r\n      <div class="thumbContant">\r\n        <div class="imagesThumb"> <img src="http://cinemagharhd.com/catagoryImages/{{catagoryBannerImages.Foreign}}" alt=""> </div>\r\n        <div class="titleThumb">Foreign <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n      </div>\r\n    </a-->\r\n\r\n  </div>\r\n</div>\r\n');
$templateCache.put('tab-short.html','\r\n<div class="row">\r\n  <div class="col thumb" ng-click="latestItem(\'short\')">\r\n    <div class="thumbContant">\r\n      <div class="imagesThumb">\r\n        <img src="img/nepali_short.jpg" alt="">\r\n      </div>\r\n      <div class="titleThumb">Short\r\n        <span class="arrow">\r\n          <i class="icon ion-ios-arrow-forward"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class="col thumb" ng-click="latestItem(\'documentary\')">\r\n    <div class="thumbContant">\r\n      <div class="imagesThumb">\r\n        <img src="img/who-w-b-gurkha.jpg" alt="">\r\n      </div>\r\n      <div class="titleThumb">Documentary\r\n        <span class="arrow">\r\n          <i class="icon ion-ios-arrow-forward"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!--</div>-->\r\n<!-- <div class="row">\r\n  <div class="col thumb" ng-click="latestItem()">\r\n    <div class="thumbContant">\r\n      <div class="imagesThumb"> <img src="img/drama.jpg" alt=""> </div>\r\n      <div class="titleThumb">Drama <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n    </div>\r\n  </div>\r\n  <div class="col thumb" ng-click="latestItem()">\r\n    <div class="thumbContant">\r\n      <div class="imagesThumb"> <img src="img/action.jpg" alt=""> </div>\r\n      <div class="titleThumb">Action <span class="arrow"><i class="icon ion-ios-arrow-forward"></i></span></div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n');
$templateCache.put('youtubeModal.html','\r\n<ion-modal-view class="ion-nifty-modal">\r\n\r\n\t<div class="ion-modal-content-custom">\r\n\t\t<ion-content class="padding">\r\n\r\n\t\t\t<i class="ion-close-circled modalCloseButton" ng-click=\'closeButtonClicked($event)\'></i>\r\n\t\t\t<you-tube class="youtubePlayer" play = "play" play_pause = "playVideo" video_link="{{movie.trailer_link}}" spinner="loading" trailer=\'true\'></you-tube>\r\n\t\t\t<!--iframe id=\'trailer_player\' playPause="playVideo" type=\'text/html\' width=\'100%\' height=\'300\' ng-src="{{movie.trailer_link}}" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe-->\r\n\t\t</ion-content>\r\n\t</div>\r\n</ion-modal-view>\r\n');}]);