angular.module('JobCtrls', ['JobServices'])
.controller('HomeCtrl', ['$scope', 'Job', function($scope, Job) {
  $scope.jobs = [];

  Job.query(function success(data) {
    $scope.jobs = data;
  }, function error(data) {
    console.log(data);
  });

  $scope.deleteJob = function(id, jobsIdx) {
    Job.delete({ id: id }, function success(data) {
      $scope.jobs.splice(jobsIdx, 1);
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('ShowCtrl', ['$scope', '$stateParams', 'Job', function($scope, $stateParams, Job) {
  $scope.job = {};

  Job.get({ id: $stateParams.id }, function success(data) {
    console.log(data)
    $scope.job = data;
  }, function error(data) {
    console.log(data);
  });
}])
.controller('NewCtrl', ['$scope', '$location', 'Job', function($scope, $location, Job) {
  $scope.job = {
    jobTitle: '',
    notes: '',
    companyName: '',
    dateApplied: '',
    coverLetter: '',
    contactPerson: '',
    contactInfo: '',
    interviewDate: '',
    jobLink: '',
    status: ''
  };

  $scope.createJob = function() {
    Job.save($scope.job, function success(data) {
      $location.path('/');
    }, function error(data) {
      console.log(data);
    });
  };
}])
.controller('NavCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.Auth = Auth;
  $scope.logout = function() {
    Auth.removeToken();
    console.log('You\'re logged out, dubby')
  };
}])
.controller('SignupCtrl', ['$scope','$http', '$state', function($scope, $http, $state) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res){
      $state.go('home');
    }, function error(res){
      console.log(res);
    });
  };
}])
.controller('LoginCtrl', ['$scope', '$http', '$state', 'Auth', function($scope, $http, $state, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res){
      Auth.saveToken(res.data.token);
      $state.go('home');
    }, function error(res){
      console.log(res);
    });
  };
}]);
