var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    //hint:orm.all()
    orm.all("burgers", function(res) {
      cb(res);
    })
  },
  create: function(cols, vals, cb) {
    //hint:orm.create()
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(condition, objColVals, cb) {
    var condition = "id=" + id;
    //hint:orm.update
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;
