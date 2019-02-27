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


