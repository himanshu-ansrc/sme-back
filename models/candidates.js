const  mongoose  = require('mongoose')
const crypto = require('crypto')
const CONFIG = require('../config');

const UserSchema = new mongoose.Schema({
   name : String,
   email: {
    type: String,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
   },
   contact : {
    type: Number,
    trim: true,
    unique: true
   },
   title: String,
   profile_pic : String,
   location: {
       id: Number,
       value : String,
   },
   qualification_documents : [{
     degree: String,
     certificates : []
   }],
   total_exp :{type:Number, default: CONFIG.DB.DEFAULT.OFF},
   rel_exp :{type:Number, default: CONFIG.DB.DEFAULT.OFF},
   avg_feedback :{type:Number, default: CONFIG.DB.DEFAULT.OFF},
   total_projects :{type:Number, default: CONFIG.DB.DEFAULT.OFF},
   projects : [{
     type : mongoose.Schema.Types.ObjectId,
     ref: 'projects',
     status: {type:Boolean, default: CONFIG.DB.DEFAULT.OFF}
   }],
   vetting:[{
    education: {type:Number, default: CONFIG.DB.DEFAULT.OFF},
    experience: {type:Number, default: CONFIG.DB.DEFAULT.OFF},
    badges:{type:Number, default: CONFIG.DB.DEFAULT.OFF},
    certificates:{type:Number, default: CONFIG.DB.DEFAULT.OFF}
   }],
   skills: {
          primary : String,
          secondry: [{type: String}]
   }, 
   cost: {
       fixed: Number,
       range: {
          max : Number,
          min: Number
       }
   },
   created: { type: Date, default: CONFIG.DB.DEFAULT.DATE},
   updated: { type: Date},
   comments: { type: String}
})

module.exports = mongoose.model('ecs', UserSchema)
