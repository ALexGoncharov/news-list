function NewsListController($routeParams, News, newsCategoriesSourses) {
  this.newsCategory = $routeParams.newsCategory;
  
  this.title = newsCategoriesSourses.find(function(el) {
    return el.key === this.newsCategory;
  }.bind(this)).name;

  News.query($routeParams.newsCategory).then(function(news) {
    this.news = news;
  }.bind(this));
}

NewsListController.$inject = ['$routeParams', 'News', 'newsCategoriesSourses'];

export default NewsListController;