const express = require('express'),
      bodyParser = require('body-parser'),
      router = express.Router(),
      mongoose = require('mongoose'),
      config = require('./config'),
      cors = require('cors');
      app = express();


  
  mongoose.connect(config.DB_URL, { useNewUrlParser: true })
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

   
  app.use(cors());
  //GET ALL ROUTERS
  app.use(require('./routes')(router));


  app.listen(3000, (err)=>{
      if(err) throw err;
      console.log("server is running on port 3000");
  });
