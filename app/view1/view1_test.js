'use strict';

describe('myApp.view1 module', function() {

  var $scope,$rootScope;

  beforeEach(module('myApp.view1'));

  beforeEach(inject(function(_$rootScope_){
    $rootScope =_$rootScope_;
    $scope =_$rootScope_.$new();
  }));

  describe('view1 controller', function(){

    it('should be defined and stuff', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl',{$scope:$scope});
      expect(view1Ctrl).toBeDefined();
      //expect($scope.greeting).toEqual('hello');
    }));

  });
});