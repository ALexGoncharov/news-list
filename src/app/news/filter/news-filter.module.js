import angular from 'angular';
import ngRoute from 'angular-route';
import core from '../../core/core.module';
import NewsFilterComponent from './news-filter.component.js';

var MODULE_NAME = angular
  .module('newsFilter', [
    ngRoute,
    core
  ])
  .component('newsFilter', NewsFilterComponent)
  .name;

export default MODULE_NAME;