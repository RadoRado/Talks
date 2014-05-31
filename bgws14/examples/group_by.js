"use strict";

var fp = require("./higher_order").fp;

var groupBy = function(groupFunction, arr) {
  var result = {};

  arr.forEach(function(value, index) {
    var group = groupFunction(value, index).toString();

    if(!result[group]) {
      result[group] = [];
    }

    result[group].push(value);
  });

  return result;
};


var students = [{
  "name" : "Daniel Taskoff",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Elena Jeleva",
  "course" : "Programming 101"
}, {
  "name" : "Luboslava Dimitrova",
  "course" : "Frontend JavaScript"
}, {
  "name" : "Anton Antonov",
  "course" : "Core Java"
}, {
  "name" : "Nikola Dichev",
  "course" : "Core Java"
}];


console.log(groupBy(function(student) {
  return student.course;
}, students));
