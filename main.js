angular.module('app', []).controller("MainController", function ($scope) {
  $scope.helloTo = "User";
  // $scope.fruits = ['Apple', 'Orange'];

  // navigator.mediaDevices.enumerateDevices()
  // .then((gotDevices) => {
  //   console.log(gotDevices);

  //   })
  // .catch((errorCallback) => {
  //   console.log(errorCallback);
  //   });

  if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
    return;
  }

  // List cameras and microphones.
  $scope.audioInput = [];
  $scope.audioOutput = [];
  $scope.video = [];

  // $scope.$on('$viewContentLoaded', function() {
  //   detectMedia();
  // });

  // window.onload = function(e) {
  //   detectMedia();
  // }


  $scope.detectMedia = function () {
    console.log('Detecting Media...')
    let audioInput = [];
    let audioOutput = [];
    let video = [];

    navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          var option = {}; //document.createElement('option');
          option.value = device.deviceId;

          if (device.kind === 'audioinput') {
            option.text = device.label || 'Microphone ' + ($scope.audioInput.length + 1);
            audioInput.push(option);
          } else if (device.kind === 'audiooutput') {
            option.text = device.label || 'Speaker ' + ($scope.audioOutput.length + 1);
            audioOutput.push(option);
          } else if (device.kind === 'videoinput') {
            option.text = device.label || 'Camera ' + ($scope.video.length + 1);
            video.push(option);
          }
        });

        $scope.audioInput = audioInput;
        $scope.audioOutput = audioOutput;
        $scope.video = video;
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });

    console.clear();
    console.log('Detecting Media...Done')
  }

  $scope.detectMedia();

});
