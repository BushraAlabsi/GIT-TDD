var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
//fetch all cats
var getCats = function() {
	// TODO: Your code here

};
getCats();
// send cat to the server
$scope.addCats=function() {
// TODO: Your code here


}

});
