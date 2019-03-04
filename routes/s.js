1. totla collections - 
   ecs -  
   projects -
   feedback - 
   projects - 
   assignments - 


Schema for collections

ecs = {
	 name : String,
	 email : String,
	 contact : Number,
	 qualification_documents : [{
	 	 degree: String,
	 	 certificates : [] 	
	 }],
	 total_exp : Number,
	 rel_exp : Number,
	 avg_feedback : Number,
	 total_projects : Number,
	 projects : [{
	 	 type : Schema.Types.ObjectId,
	 	 ref: 'projects'
	 }],
	 created: { type: Date, default: Date.now},
	 updated: { type: Date},
	 comments: { type: Stringw}
}

projects  = {
	  client_id : {type: String},
	  project_name : {type : String},
	  skills: [],
	  duration: { 
          start: Date,
          end: Date
	  },
	  timeline : String,
	  budget: String,
	  cadidates : {
	  	  selected : [ {type : ObjectId, ref: 'ecs'} ],
	  	  approved : [ {type : ObjectId, ref: 'ecs'} ]
	  },
	  created: { type: Date, default: Date.now},
	 updated: { type: Date},
	 comments: { type: Stringw}
}

feedback = {
	 project_id: String,
	 ecid : String,
	 rating : String,
	 comments : {
	 	 pos: String,
	 	 neg : String
	 }
}



assignments = {
	 //Yet to decide
}


skills: {
	skills : []
}




API End Points 


1. Admin/User -
   
   /admin/create - POST 
   /admin/login  - POST 
   /admin/auth - POST ,
   /admin/logout - POST ,
   /admin/   -GET - List of all users
   /admin/:id - GET - fetch a particular user



2 ECs 
  
   /ecs/ - list all ecs - GET     -ALL
   /ecs/:id - list ec of a particular id -GET  -ALL
   /ecs/ - create new ec account - POST  - OST      
   /ecs/:id - update existing ec account - PUT  - OST/PM


3. requisition
    

  requisition/    GET - list of all requisitions  - ALL
  requisition/    POST - create a requisition - PM
  requisition/:id - GET - search a particular requisition - ALL
  requisition/:id    PUT - PM/OST/L1/L2.....




