import angular from 'angular';
import coreNews from './news/news.module';


var MODULE_NAME = angular
  .module('core', [coreNews])
  .name;

export default MODULE_NAME;