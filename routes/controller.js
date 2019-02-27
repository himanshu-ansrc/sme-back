const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config')
module.exports = {

	   //MIDDLEWARE FUNCTIONS 
        middleware_authenticate: async (req,res, next)=>{
        	 if(req.headers['token']){
                const token = req.headers['token'];
                const decoded = jwt.verify(req.headers['token'], config.JWT_SECRET);
                if(decoded){
                     try{
	                    const user = await User.findById(decoded['data']);
	       	      	    if(user)
	       	      	       req.auth = user;
	       	      	       return next();
	       	      	 }catch(e){
	                       return res.redirect('http://localhost:8080')
	       	      	 }
                }
                return res.redirect('http://localhost:8080');
        	 }else{
                return res.redirect('http://localhost:8080');
        	 }  	 
        },
	   //MIDDLEWARE FUNCTIONS END 


	   load_admin_dashboard : (req, res)=>{
           if(req.auth){
           	  res.send({
           	  	  data : req.auth
           	  })
           }
	   },

       create : async (req, res)=>{
           try {
             const user = new User(req.body);
             console.log(user);
             const data = await user.save();
             res.status(200).send({
                 data
             })
           }catch(e) {
               res.status(400).json({error: e})
           }
       },

       login: async (req ,res)=>{
       	  console.log(req.body)
       	  try{
             const result = await User.findOne({
             	email: req.body['email']
             });
             if(result){
                const password = !0//User.authenticate(req.body['password']);
             	if(password){
                   const token = jwt.sign({ data: result.id}, config.JWT_SECRET , { expiresIn: 60*60 });
                         res.status(200).json({token})
             	}else{
             		res.status(400).json({error: "error"})
             	}
             }else{
                             
             }
       	  }catch(e){

       	  }
       },

       authenticate: async (req,res)=>{
       	      try{
                 var decoded = jwt.verify(req.headers['token'], config.JWT_SECRET);
                 if(decoded){
	                 try{
	                    const user = await User.findById(decoded['data']);
	       	      	    res.status(200).json({ token : decoded});  
	       	      	 }catch(e){
	                    res.status(400).json({ error : "user not found"}); 
	       	      	 }
                 }else{
                     res.status(400).json({ error : "user not found"});
                 }

       	      }catch(e){
                    res.status(400).json({ error : "user not found"}); 
       	      }
       }


}
