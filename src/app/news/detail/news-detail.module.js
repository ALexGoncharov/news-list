import angular from 'angular';
import ngRoute from 'angular-route';
import socialShare from 'angular-socialshare';
import NewsDetailComponent from './news-detail.component.js';
import core from '../../core/core.module';

var MODULE_NAME = angular
  .module('newsDetail', [
    ngRoute,
    core,
    socialShare
  ])
  .component('newsDetail', NewsDetailComponent)
  .name;

export default MODULE_NAME;