import angular from 'angular';
import ngRoute from 'angular-route';
import NewsListComponent from './news-list.component';
import core from '../../core/core.module';
import newsFilter from '../filter/news-filter.module.js';

var MODULE_NAME = angular
  .module('newsList', [
    ngRoute,
    core,
    newsFilter
  ])
  .component('newsList', NewsListComponent)
  .name;

export default MODULE_NAME;