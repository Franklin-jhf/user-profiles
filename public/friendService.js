angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      return $http.post('/api/login', user);
    };

    this.getFriends = function() {
    	/* FIX ME */
    	return $http.get('/api/profiles').then( res => {
    		console.log(res);
    		return res.data;
    	});
    };
  
});
