function NewsDetailController($routeParams, News, $window) {
  this.newsCategory = $routeParams.newsCategory;

  this.locationHref = $window.location.href;

  News.get($routeParams.newsCategory, $routeParams.newsId).then(function(newsItem) {
    this.newsItem = newsItem;
  }.bind(this));
}

NewsDetailController.$inject = ['$routeParams', 'News', '$window'];

export default NewsDetailController;