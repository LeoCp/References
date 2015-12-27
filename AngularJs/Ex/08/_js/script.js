var app = angular.module("app",[]);
app.controller("ctrl", function ($scope) {

  $scope.operadoras = [
    {nome: "Oi",codigo:14, categoria:"Celular"},
    {nome: "Vivo",codigo:15, categoria:"Celular" },
    {nome: "Tim",codigo:41, categoria:"Celular" },
    {nome: "Gvt",codigo:25, categoria:"Fixo"},
    {nome: "Embratel",codigo:21, categoria:"Fixo" }
  ];
  $scope.contatos = [];
  $scope.addContato = function (contato) {
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
  }
});
