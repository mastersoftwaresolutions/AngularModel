var App = angular.module('colorApp', ['minicolors']);

  App.config(function (minicolorsProvider) {
      angular.extend(minicolorsProvider.defaults, {
        control: 'hue',
        position: 'bottom left',
        theme: 'bootstrap'
      });
  });

App.controller('colorCtrl', function($scope) {

    $scope.items = [
      {title:"Item1", color: "#e6c8c8"},
      {title:"Item2", color: "#fdff50"},
      {title:"Item3",color: "#545445"}
    ];
    $scope.item = {};
    $scope.editButton = false;
    $scope.addButton = true;

    // Add new Item
    $scope.addItem = function(item) {
      if(typeof item.title == 'undefined'){
        $scope.error = "Please fill form";
        return false;
      }else{
        $scope.error = '';
      }
      $scope.items.push(item);
      $scope.item = {};
    }
    // Update Item
    $scope.updateItem = function(item) {
      $scope.items[item.id].title = item.title;
      $scope.items[item.id].color = item.color;
      $scope.item = {};
      $scope.editButton = false;
      $scope.addButton = true;
    }
    // Remove Item
    $scope.removeItem = function(index){
      $scope.items.splice(index,1);
    }
    // Show Clicked Item in Textboxs Fields to Edit
    $scope.editItem = function(index){
      $scope.editButton = true;
      $scope.addButton = false;
      $scope.item.title = $scope.items[index].title;
      $scope.item.color = $scope.items[index].color;
      $scope.item.id = index;
    }
  });