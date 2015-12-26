var app = angular.module("app",[]);
app.controller("ctrl", function ($scope) {

  $scope.pessoas = [
    {nome:"Leonardo", idade:19},
    {nome:"Neide", idade:20},
    {nome:"Natalia", idade:18}
  ];

});
