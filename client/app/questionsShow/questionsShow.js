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

    //Transition hooks
	// $transitionsProvider.onBefore({
	// 	to: 'questionsShow',
	// 		}, transition => {

	//     		//Get params
	// 			const params = transition.params();

	//     		//Must have token param
	// 			if (!params.slug || !params.id) {
 //  					return transition.router.stateService.target('error', {
 //    					type: 'page-not-found',
 //  					});
	// 			}
	//     });

  });
