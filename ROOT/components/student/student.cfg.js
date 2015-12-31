
(function (jq) {
	'use strict';
	
	angular
			.module('example.student') // get the student module
			.config(homeConfig); // add configuration to the module level
			
	function homeConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('student.list', {
				vie
				url: '/list',
				templateUrl: 'components/student/student-list.tpl.html',
				controller: 'example.student.StudentListCtrl',
				controllerAs: 'studentListCtrl'
			})
			.state('student.edit', {
				url: '/edit',
				params: {
					selectedStudent: null
				}
				templateUrl: 'components/student/student-list.tpl.html',
				controller: 'example.student.StudentListCtrl',
				controllerAs: 'studentListCtrl'
			});
			
	}
	
} (jQuery));