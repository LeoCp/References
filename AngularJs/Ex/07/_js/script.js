var app = angular.module("app",[]);
app.controller("ctrl", function ($scope) {

  $scope.pessoas = [];
  $scope.addPessoa = function (pessoa){
    $scope.pessoas.push(angular.copy(pessoa));
    delete $scope.pessoa;
  };
});
