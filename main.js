angular.module('app', []).controller("MainController", function ($scope) {
  $scope.helloTo = "User";

  function detectMedia() {
    $scope.audioInputIcon = './assets/cross.png';
    $scope.audioOutputIcon = './assets/cross.png';

    navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          let [kind, type, direction] = device.kind.match(/(\w+)(input|output)/i);
          if (kind === 'audioinput' || (type === "audio" && direction === 'input')) {
            $scope.audioInputIcon = './assets/checkmark.png';
            $scope.$apply()
          } else if (kind === 'audiooutput' || (type === "audio" && direction === 'output')) {
            $scope.audioOutputIcon = './assets/checkmark.png';
            $scope.$apply()
          }
        });
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });

  }

  navigator.mediaDevices.ondevicechange = function (event) {
    // console.log(event);
    detectMedia();
  }

  detectMedia();
});
