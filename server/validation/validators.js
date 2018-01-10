module.exports = {

  signup: function(req, res, next) {
    req.checkBody("username", "Enter a valid email address.").isEmail()
    req.checkBody("username", "Email address cannot exceed 30 characters.").isLength({max:30})
    req.checkBody("password", "Password must contain at least 8 chars").isLength({min:8})
    
    var errors = req.validationErrors();
    if (errors) {
      res.status(200).send({"errors...":errors})
    } else {
      res.status(200).send({"message":"no errors!"})
    }
  },

  login: function(req, res, next) {
    req.checkBody("username", "Enter a valid email address.").isEmail()
    req.checkBody("password", "Enter a password").notEmpty()
    
    var errors = req.validationErrors();
    if (errors) {
      res.status(200).send({"errors...":errors})
    } else {
      res.status(200).send({"message":"no errors!"})
    }
  },
  

  // more validators here
}