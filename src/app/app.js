import angular from 'angular';
import ngRoute from 'angular-route';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize'; 
import NewsList from './news/list/news-list.module';
import NewsFilter from './news/filter/news-filter.module';
import NewsDetail from './news/detail/news-detail.module';
import appComponent from './app.component';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/flatly/bootstrap.min.css';
import 'components-font-awesome/css/font-awesome.min.css';
import 'bootstrap-social/bootstrap-social.css';

import '../style/app.css';

var MODULE_NAME = angular.module('app', [ngRoute, ngAnimate, ngSanitize, NewsList, NewsFilter, NewsDetail])
  .component('app', appComponent)
  .config(['$locationProvider', '$routeProvider', 
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/:newsCategory', {
          template: '<news-list></news-list>'
        })
        .when('/:newsCategory/:newsId', {
          template: '<news-detail></news-detail>'
        })
        .otherwise('/news_all');
    }])
  .name;

export default MODULE_NAME;