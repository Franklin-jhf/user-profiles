angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
	$scope.getFriends = () => {
		friendService.getFriends().then( res => {
			$scope.currentUser = res.currentUser;
			$scope.friends = res.friends;
		})
	}

	$scope.getFriends();
});