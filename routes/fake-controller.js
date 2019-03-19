const User = require('../models/user');
const Ecs = require('../models/candidates');
const faker = require('faker');
const config = require('../config');
const LOCATION = require('../models/location');
const SKILLS = require('../models/skills');

module.exports = {
       users :  async (req, res)=>{  
           function insertSkills(skillsList){
               let count = Object.keys(skillsList).length;
               let rand = Math.floor((Math.random() * count) + 1);
               let arr = [];
               for(let i=1; i<=rand; i++){
                   arr.push(skillsList[Math.floor((Math.random() * count) + 1)])
               } 
               return arr;
           }
           let dataObj = [];
           for(let l=1; l<=100; l++){
               let randInt = Math.floor((Math.random() * 10) + 1);
               let randInt2 = Math.floor((Math.random() * 2) + 1);
               let contactArr = Math.floor(Math.random() * (8999999999 - 8000000000 + 1)) + 8000000000;
               dataObj.push({
                  name : faker.name.findName(),
                  email : faker.internet.email(),
                  contact : contactArr,
                  title : SKILLS[randInt2],
                  profile_pic: faker.image.avatar(),
                  location :{
                      id : LOCATION[randInt-1]['id'],
                      value: LOCATION[randInt-1]['city']
                  },
                 total_exp :Math.floor((Math.random() * 10) + 1),
                 rel_exp :Math.floor((Math.random() * 10) + 1),
                 avg_feedback :Math.floor((Math.random() * 5) + 1),
                 total_projects :Math.floor((Math.random() * 10) + 1),
                 qualification_documents : [{
                   degree: "bachelor",
                   certificates : ["http://resumecompanion.com/wp-content/uploads/2016/12/executive-assistant-resume-sample-summary-of-qualifications-download.jpg"]
                 }],
                 skills: {
                          primary : SKILLS[Math.floor((Math.random() * Object.keys(SKILLS[randInt2]['skills']).length) + 1)],
                          secondry: insertSkills(SKILLS[randInt2])
                 }, 
                 cost: {
                       fixed: Math.floor((Math.random() * 10) + 1),
                       range: {
                          max : Math.floor((Math.random() * 10) + 5),
                          min: Math.floor((Math.random() * 5) + 1)
                       }
                 },
                 vetting:{
                    education: Math.floor((Math.random() * 1) + 0),
                    experience: Math.floor((Math.random() * 1) + 0),
                    badges:Math.floor((Math.random() * 1) + 0),
                    certificates:Math.floor((Math.random() * 1) + 0)
                },
               })
           }
           const bulkInsert = await Ecs.insertMany(dataObj);
           res.send({
              key: bulkInsert
           })
       }
}

