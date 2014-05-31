"use strict";
// using wu.js - http://fitzgen.github.io/wu.js/#wu-partial
var wu = require("wu").wu;

var a = "123123123".split("");
console.log(a.map(parseInt));

var parseInt10 = wu.partial(parseInt, wu.___, 10);
console.log(a.map(parseInt10));
