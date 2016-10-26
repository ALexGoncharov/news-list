function NewsFilterController($routeParams, $route, newsCategoriesSourses) {
  this.newsCategories = newsCategoriesSourses;

  this.selectedCategory = $routeParams.newsCategory;

  this.update = function() {
    $route.updateParams({ newsCategory: this.selectedCategory });
  }

}

NewsFilterController.$inject = ['$routeParams', '$route', 'newsCategoriesSourses'];

export default NewsFilterController;