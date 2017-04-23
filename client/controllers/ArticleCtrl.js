app.controller('ArticleCtrl', [
    '$scope',
    '$http',
    '$filter',
    '$location', function(
        $scope,
        $http,
        $filter,
        $location) {

    var urlArray = $location.url().split('/');

    $http.get('/article/' + urlArray[2]).then(function(body, status) {
        article = {
            'id': body.data.id,
            'title': body.data.title,
            'content': body.data.content,
            'date': $filter('date')(body.data.date, "dd/MM/yyyy")
        };
      $scope.article = article;
    }, function(data, status) {
      console.log('Impossible to retrieve any article');
      $scope.article = {};
    })
}]);
