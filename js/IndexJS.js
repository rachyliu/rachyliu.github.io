var app = angular.module("VisitsRecord", []);

app.controller("myCtrl", function ($scope, $http) {
    $http.get("https://rachyliu.github.io/attachment/VisitsRecord.php").then(function (response) {
        $scope.myVisits = response.data.records;
        console.log(response.data.records);
    });
    $scope.name = "Guest";
    $scope.selectedType = { type: "None", message:""};
    $scope.type = [
        { type: "Recruiter or Hiring Manager", message: "This is an app made using AngularJS. \n I also used HTML5, CSS, JavaScript, jQuery and Bootstrap.\n Images are drawn using PhotoShop and Illustrator." },
        { type: "Friend", message: "This is an App recording visits. Please help by filling these fields :)" },
        { type: "Random Person", message: "I am Ruiqing (Rachel) Liu. This is my Website. \n You are going to see my Front-End and Art works here." }];
    $scope.saveInput = {
        name: $scope.name,
        type: $scope.selectedType.type,
        date: new Date().getTime()
    };
    $scope.saveVisit = function () {
        console.log($scope.saveInput);
        $http.post('https://rachyliu.github.io/attachment/VisitsRecord.php', $scope.saveInput).then(onSaveVisitSuccess, onSaveVisitError);
    }
});

function onSaveVisitSuccess(arg) {
    console.log(arg);
}

function onSaveVisitError(arg) {
    console.log(arg);
}
