var app = angular.module("VisitsRecord", []);

app.controller("myCtrl", function ($scope, $http) {
    $http.get("http://localhost:51290/../attachment/VisitsRecord.php").then(function (response) {
        $scope.myVisits = response.data.records;
    });
    console.log($scope.myVisits);
    $scope.name = "Guest";
    $scope.type = [
        { type: "Recruiter or Hiring Manager", message: "This is an app made using AngularJS. \n I also used HTML5, CSS, JavaScript, jQuery and Bootstrap.\n Images are drawn using PhotoShop and Illustrator." },
        { type: "Friend", message: "This is an App recording visits. Please help by filling these fields :)" },
        { type: "Random Person", message: "I am Ruiqing (Rachel) Liu. This is my Website. \n You are going to see my Front-End and Art works here." }];
});