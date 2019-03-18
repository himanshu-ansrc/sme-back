const  mongoose  = require('mongoose')
const crypto = require('crypto')
const CONFIG = require('../config');

const projectsSchema = new mongoose.Schema({
   client_id : {type: String},
   project_name : {type : String},
   description:{
      type: String
   },
   vacancies: {
      type: Number
   },
   budget: Number,
   duration: { 
      start: Date,
      end: Date
   },
   timeline : String,
   skills: [],
   location: Number,
   experience: Number,
   // cadidates : {
   //    selected : [ 
   //                 {ec-reference, test, assignment, feedback_ref, status, comments_log
   //              }
   //              ],
   //    finalized : [ 
   //                 {type : ObjectId, ref: 'ecs'
   //                }]
   // },
   candidates: {
      selected : [],
      finalized: []
   },
   workflow_staus :{
       type: Number,
       default:  CONFIG.DB.DEFAULT.STATUS
   },
   created: { type: Date, default: Date.now},
   updated: { type: Date},
   comments: { type: String}
})

module.exports = mongoose.model('projects', projectsSchema)
