var xmlUrl = 'http://ajax.googleapis.com/ajax/services/feed/load' + 
  '?v=1.0&num=100&output=xml&callback=JSON_CALLBACK&q=CATEGORY_URL';

function NewsFactory($http, $location, x2js, newsCategoriesSourses) {

  function getXmlFromResponse(response) {
    return response.data.responseData.xmlString;
  }

  function parseXml(xmlStr) {
    var jsonObj = x2js.xml_str2json(xmlStr);

    var newsXML = jsonObj.rss.channel.item;

    return newsXML.map(function(el) {
      var img = angular.element(el.image);
      
      return {
        id: el.guid.__text,
        title: el.title,
        imageURL: img.attr('src'),
        fulltext: el.fulltext
      };
    });
  }

  return {
    query: function(newsCategory) {
      var selectedCategoryUrl = newsCategoriesSourses.find(function(el) {
        return el.key === newsCategory;
      }).url;

      return $http.jsonp(xmlUrl.replace('CATEGORY_URL', selectedCategoryUrl))
        .then(getXmlFromResponse)
        .then(parseXml);
    },
    get:  function(newsCategory, newsId) {
      return this.query(newsCategory).then(function(news) {
        return news.find(function(el) {
          return el.id === newsId;
        });
      })
    }
  }
}

NewsFactory.$inject = ['$http', '$location', 'x2js', 'newsCategoriesSourses'];

export default NewsFactory;