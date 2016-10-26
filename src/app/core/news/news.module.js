import newsValue from './news.value';
import angular from 'angular';
import ngResource from 'angular-resource';
import NewsFactory from './news.factory'; 
import xmlParser from 'angular-xml';

var MODULE_NAME = angular
  .module('core.news', [ngResource, xmlParser])
  .value('newsCategoriesSourses', newsValue)
  .factory('News', NewsFactory)
  .name;

export default MODULE_NAME;