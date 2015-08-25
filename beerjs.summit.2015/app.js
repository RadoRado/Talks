var lib = require("./stdlib")(window);
var Container = require("./container")(window);
var Maybe = require("./maybe")(window);

function q(selector) {
  if(selector.startsWith("#")) {
    return document.querySelector(selector);
  }

  return document.querySelectorAll(selector);
}

