(function(){
	'use strict';
	angular
		.module('gulp-playground')
		.component('app', {
			templateUrl: 'app.html',
			controller: AppController,
			controllerAs: 'vm'
		});

	function AppController(){

		var vm = this;

		vm.headline = 'Hello World';
	};
})();