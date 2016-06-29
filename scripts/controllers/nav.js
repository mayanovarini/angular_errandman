'use strict';

app.controller('NavController', function($scope, $location, Auth, toaster) {

  $scope.currentUser = Auth.user;
  $scope.signedIn = Auth.signedIn;

  $scope.logout = function() {
    Auth.logout();
    toaster.pop('Success', 'Logged out successfully');
    //console.log("Logged out!");
    $location.path('/');
  };

});
