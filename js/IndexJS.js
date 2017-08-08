var app = angular.module("VisitsRecord", []);

app.controller("myCtrl", function ($scope, $http) {
    $http.get("../attachment/VisitsRecord.php").then(function (response) {
        console.log(response);
        $scope.myVisits = response.data.records;
        console.log(response.data.records);
    });
    $scope.message = [
        "This is an app made using AngularJS. \n I also used HTML5, CSS, JavaScript, jQuery and Bootstrap.\n Images are drawn using PhotoShop and Illustrator.",
        "This is an App recording visits. Please help by filling these fields :)",
        "I am Ruiqing (Rachel) Liu. This is my Website. \n You are going to see my Front-End and Art works here."
    ];

    $scope.type = [
        { type: "Recruiter or Hiring Manager", message: 0 },
        { type: "Friend", message: 1 },
        { type: "Random Person", message: 2 }];
    $scope.saveInput = {
        name: "Guest",
        type: "None",
        date: new Date().getTime()
    };
    $scope.saveVisit = function () {
        console.log($scope.saveInput);
        $http({
            method: 'POST',
            url: '../attachment/VisitsRecord.php',
            headers: {
                'Content-Type': 'application/json', /*or whatever type is relevant */                
            },
            data: $scope.saveInput
        }).then(onSaveVisitSuccess, onSaveVisitError);
    }
});

function onSaveVisitSuccess(arg) {
    console.log(arg);
}

function onSaveVisitError(arg) {
    console.log(arg);
}
