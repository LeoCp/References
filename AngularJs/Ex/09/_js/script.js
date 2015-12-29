var app = angular.module("app",[]);
app.controller("ctrl", function ($scope) {
  $scope.pessoas = [
    {nome:"Leonardo",idade:19},
    {nome:"Neideane", idade:20}
  ];

  $scope.addPessoa = function (pessoa) {
    $scope.pessoas.push(angular.copy(pessoa));
    delete $scope.pessoa;
  };

  $scope.deletePessoa = function (pessoas) {
    $scope.pessoas = pessoas.filter(function (pessoa) {
      if(!pessoa.selecionado) return pessoa;
    });
  };

  $scope.isPessoasSelecionadas = function (pessoas) {
    return pessoas.some(function (pessoa) {
      return pessoa.selecionado;
    });
  };
});
