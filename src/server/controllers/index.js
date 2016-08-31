const User = require('./../models');

module.exports = {
  post: (req, res) => {
    console.log("POST", req.body);
    User.watched(req.session.id, req.body, (err, data) => {
      if (err) throw err;
      res.status(201);
      console.log(".............DATA", data)
      res.send(data);
    })
  },
  get: (req, res) => {
    console.log("GET", req.session.id);
    User.history(req.session.id, (err, data) => {
      if (err) throw err;
      res.send(data);
    })
  },
}