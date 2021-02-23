'use strict';


// angular.module('angularJsappApp')
//   .controller('MainCtrl', function () {
//     this.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });


var app = angular.module('myApp'); 
  
  app.component('firstComponent',{
      template:'hello from first component ...{{$ctrl.works}}',
      controller:function fc($scope)
      {
          this.works="it works";
      }
  });
  
  app.component('secondComponent',{
      template:'hello from second component ...{{$ctrl.works}}',
      controller:function fc($scope)
      {
          this.works="it works";
      }
  });
  

  app.service('siblingSharing',function(){
  
    let list=[];
    
    this.addToList=function(x)
    {
        list.push(x);
    }

    this.getList=function()
    {
        return list;
    }

});
  
  app.controller('sibling1',function($scope,siblingSharing){
  
      $scope.sibfunc=function(){
          siblingSharing.addToList($scope.sibcon);
          $scope.sibcon="";
      }
  
  });
  
  app.controller('sibling2',function($scope,siblingSharing){
  
      $scope.list=[];
      $scope.list=siblingSharing.getList();
  
  });
  
  
  app.controller('city',function($scope){
  
  $scope.london="Controller Works...london";
  $scope.ny="Controller Works...NY";
  
  })
  
  app.controller('todoCtrl', function($scope) {
      $scope.todoList = [];
  
      $scope.todoAdd = function() {
          $scope.todoList.push({todoText:$scope.todoInput,edit:false});
          $scope.todoInput = "";
      };
  
      $scope.edit=function(x)
      {
          x.edit=true;
          //console.log($scope.todoList);
      }
  
      $scope.makeChanges=function(x)
      {
          x.edit=false;
          //console.log($scope.todoList);
      }
  
      $scope.delete=function(x)
      {
          //console.log(x);
          let ind=0;
          $scope.todoList.forEach((val,iter)=>{
              if(val==x)
              {
                  ind=iter;
              }
          })  
          $scope.todoList.splice(ind,1);
      }
  });
  
  app.controller('serviceController',function($scope,$http)
  {
      
      $scope.arr=[];
      $http({
          method : "GET",
          url : "https://jsonplaceholder.typicode.com/todos"
          })
      .then(function(res){
          
      $scope.arr=res.data;    
      $scope.arr.splice(10);
      //console.log($scope.arr);
      });
  
  
  
  });
  
  app.controller('level1controller',function($scope){
  
      $scope.$on('pass-up', function (event, args) {
          $scope.v=args;
      });
  
      $scope.broadcaster=function()
      {
          $scope.$broadcast('pass-down',$scope.txt1);
      }
  });
  
  
  app.controller('level2controller',function($scope){
  
      $scope.$on('pass-down', function (event, args) {
          $scope.v=args;
      });
  
      $scope.emitter=function()
      {
          //console.log($scope.txt);
      $scope.$emit('pass-up',$scope.txt2);
      }
  });