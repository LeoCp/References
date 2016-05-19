# References
## Como funciona o AngularJS
## Diretivas:
### ng-app:
### ng-controller:
### ng-repeat:
### ng-model:
### ng-click:
### ng-disabled:
### ng-options:
### ng-class:
### ng-style:
## Criar diretivas
```javascript
angular.module("nomeDoModulo")
  .directive("nomeDaDiretiva", function () {
    //Essa função retorna o objeto chamado Derective Definition Object
    return {
      //Propriedades da diretiva (define o comportamento da Diretiva)
    };
});
```
## Propriedades 
### restrict:
A propriedade <strong>restrict</strong> é usada para especificar como a diretiva irá ser usada no  HTML. Os valores que podemos usar são:

####A - Atributo
####E - Elemento
####C - Class
####M - Comentário

### template:
### templateUrl:
### replace:
### priority:
### transclude:
### scope:
### terminal:
### require:
