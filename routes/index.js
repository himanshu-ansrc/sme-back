const controller = require('./controller');

const fakeController = require('./fake-controller');


module.exports = (router)=>{
	
     router.route('/create')
            .post( controller.create);

	 router.route('/login')
	       .post(controller.login);

	 router.route('/authenticate')
	       .post(controller.authenticate);	 

	 router.route('/list-candidates')
	       .get(controller.listCandidates);	 
     
 	 router.route('/skills_and_locations')
           .get(controller.skillsAndLocations);	 

	 router.route('/create-request')
	       .post(controller.create_sme_request);	

	 //test
	 router.route('/admin-dashboard')
           .post(controller.middleware_authenticate, controller.load_admin_dashboard)

    //fake
    router.route('/fake-users')
          .get(fakeController.users)

     return router;
}
