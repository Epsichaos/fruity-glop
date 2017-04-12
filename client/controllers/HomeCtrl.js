app.controller('HomeCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  $http.get('/articles').then(function(body, status) {
    $scope.articles = $scope.generateArticles(body.data);
  }, function(data, status) {
    console.log('Impossible to retrieve any article');
    $scope.articles = {};
  })

  $scope.generateArticles = function(dbArticles) {
    var articles = [];
    dbArticles.forEach(function(article) {
      articles.push({
        'id': article.id,
        'title': article.title,
        'abstract': article.abstract,
        'date': $filter('date')(article.date, "dd/MM/yyyy")
      });
    });
    console.log(articles);
    return articles;
  }
}]);
