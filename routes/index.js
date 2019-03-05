const controller = require('./controller');

const fakeController = require('./fake-controller');


module.exports = (router)=>{
	
     router.route('/create')
            .post( controller.create);

	 router.route('/login')
	       .post( controller.login);

	 router.route('/authenticate')
	       .post( controller.authenticate);	 

	 //test
	 router.route('/admin-dashboard')
           .post(controller.middleware_authenticate, controller.load_admin_dashboard)

    //fake
    router.route('/fake-users')
          .get(fakeController.users)

     return router;
}
