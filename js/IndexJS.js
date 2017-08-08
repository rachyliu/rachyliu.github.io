$("#VisitsRecordApp").show("fast");

var app = angular.module("VisitsRecord", []);

app.controller("myCtrl", function ($scope, $http) {
    //$http.get("../attachment/VisitsRecord.json").then(function (response) {
    //    console.log(response);
    //    $scope.myVisits = response.data.records;
    //    console.log(response.data.records);
    //});
    $http.get("https://rachyliu.github.io/attachment/RecordExample.php").then(function (response) {
        console.log(response);
        $scope.myVisits = response.data.records;
        console.log(response.data.records);
    });
    $scope.message = {
        "Recruiter or Hiring Manager":"This is an app made using AngularJS. \n I also used HTML5, CSS, JavaScript, jQuery and Bootstrap.\n Images are drawn using PhotoShop and Illustrator.",
        "Friend":"This is an App recording visits. Please help by filling these fields :)",
        "Random Person":"I am Ruiqing (Rachel) Liu. This is my Website. \n You are going to see my Front-End and Art works here."
    };

    $scope.type = ["Recruiter or Hiring Manager","Friend", "Random Person"];
    $scope.saveInput = {
        name: "Guest",
        type: "None",
        date: new Date().getTime()
    };
    $scope.saveVisit = function () {
        console.log($scope.saveInput);
        $("#VisitsRecordApp").hide();
        $("#CMUportfolioBlock").html('<iframe class="RL-Webs" src="CMUportfolio.html"></iframe>').show();
        //$http.post('../attachment/VisitsRecord.php', $scope.saveInput).then(onSaveVisitSuccess, onSaveVisitError);
    }
});

function onSaveVisitSuccess(arg) {
    console.log(arg);
}

function onSaveVisitError(arg) {
    console.log(arg);
}
