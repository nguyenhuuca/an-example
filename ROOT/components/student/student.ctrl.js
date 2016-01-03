
(function (jq) {
	'use strict';
	
	angular
			.module('example.student') // load the student module
			.controller('example.student.StudentCtrl', StudentController)// add a controller to the student module
			.controller('example.student.StudentListCtrl', StudentListController) // add a controller to the student module
			.controller('example.student.StudentEditCtrl', StudentEditController); // add a controller to the student module
			
	StudentController.$inject = ['$scope', '$stateParams'];
	function StudentController($scope, $stateParams) {
		var ctrl = this;
		ctrl.testS  ="hello";
	}
	
	StudentListController.$inject = ['$scope', '$stateParams','studentService'];
	function StudentListController($scope, $stateParams,studentService) {
		//$scope.students = 
		var ctrl = this;
		ctrl.studentList = null;
		studentService.getStudentList().then(function(students){
			console.log(students);
			ctrl.studentList = students;
		});
		
		
	}
	
	StudentEditController.$inject = ['$scope', '$stateParams','example.student.StudentDO'];
	function StudentEditController($scope, $stateParams,StudentDO) {
		console.log($stateParams.selectedStudent);
		var ctrl = this;
		ctrl.student = new StudentDO();
		if($stateParams.selectedStudent){
			ctrl.student.firstName = $stateParams.selectedStudent.firstName;
			ctrl.student.lastName = $stateParams.selectedStudent.lastName;	
		}
		
	}
} (jQuery));