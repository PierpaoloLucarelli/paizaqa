'use strict';

angular.module('paizaqaApp')
  .config(function ($stateProvider) {

    $stateProvider
      .state('questionsShow', {
        url: '/questions/show/:id/:slug',
        templateUrl: 'app/questionsShow/questionsShow.html',
        controller: 'QuestionsShowCtrl',
        params: {
      		id: {
        		type: 'string',
      		},
      		slug: {
        		type: "string",
     		},
     	}
    });

  });
