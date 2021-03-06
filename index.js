var fs = require("fs");
var path = require("path");

function forEachAsync (arr, fun) {
  arr.forEach(function (element) {
    process.nextTick(function () {
      fun(element);
    });
  });
}

function followAsync (start, fun) {
  var isfun = (typeof fun === "function");
  (function async (trail) {
    fs.readdir(trail, function (err, found) {
      !err && forEachAsync(found, function (breadcrumb) {
        var next = path.join(trail, breadcrumb);
        fs.stat(next, function(err, stats) {
          !err && stats.isDirectory() ?
            async(next) : isfun && fun(breadcrumb, trail, stats);
        });
      });
    });
  })(path.normalize(start));
}

function followSync (start, fun) {
  var found = [];
  var isfun = (typeof fun === "function");
  (function sync (trail) {
    fs.readdirSync(trail).forEach(function (breadcrumb) {
      var next = path.join(trail, breadcrumb);
      var stats = fs.statSync(next);
      stats.isDirectory() ?
        sync(next) : found.push(next) && isfun && fun(breadcrumb, trail, stats);
    });
  })(path.normalize(start));
  return found;
}


module.exports = {
  async: followAsync,
  sync: followSync
}
