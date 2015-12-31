
(function (jq) {
	'use strict';
	
	angular
			.module('example.student') // load the student module
			.controller('example.student.StudentCtrl', StudentController); // add a controller to the student module
			.controller('example.student.StudentListCtrl', StudentListController); // add a controller to the student module
			.controller('example.student.StudentEditCtrl', StudentEditController); // add a controller to the student module
			
	StudentController.$inject = ['$scope', '$stateParams'];
	function StudentController($scope, $stateParams) {
		
	}
	
	StudentListController.$inject = ['$scope', '$stateParams'];
	function StudentListController($scope, $stateParams) {
		$scope.students = 
	}
	
	StudentEditController.$inject = ['$scope', '$stateParams'];
	function StudentEditController($scope, $stateParams) {
		$scope.student = $stateParams.selectedStudent;
	}
} (jQuery));