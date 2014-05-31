"use strict";

var fp = require("./higher_order").fp;

var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript",
  "score" : 90
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101",
  "score" : 80
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript",
  "score" : 56
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java",
  "score" : 90
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java",
  "score" : 75
}];

// var above80 = fp.map(function(student) {
//   return student.name;
// }, fp.filter(function(student) {
//   return student.score >= 80;
// },students));

// console.log(above80);
