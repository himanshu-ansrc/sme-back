module.exports = {
   PORT : 8080 || process.env.PORT,
   DB_URL: 'mongodb+srv://sme:sme123@cluster0-eed2c.mongodb.net/sme?retryWrites=true',
   DB:{
      DEFAULT: {
      	   	  ON : 1,
   	          OFF: 0,
   	          MIN: 0
      },
      LOCATION : {
      	 INDIA : 1
      },
      DATE: Date.now
   },
   JWT_SECRET : 'himanshu',
   SME_TOKEN : 'qwertyuiop234',
   TOKEN: 'token'
}
