const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require('cookie-session')
const queries = require('./db/queries');
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'g64',
  keys: ['keyboard cat'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.set('view engine', 'hbs');
app.use(express.static("public"));

app.get("/", function(req, res){
  if (req.session.count >= 1) {
    req.session.count++;
  } else {
    req.session.count = 1
  }
  console.log(req.session);
  res.render('index', {title: 'Cookie Practice'});
})

app.post('/page2', function(req, res) {
  // console.log(req.body);
  var email = req.body.email
  var password = req.body.password
  queries.getUser(email, password)
    .then(users => {
      console.log("logged in as " + users[0].email);
      req.session.userInfo = users[0];
      console.log(req.session.userInfo);
      res.render('page2', {
        userInfo: req.session.userInfo
      })
    })
})



app.listen(port, function(){
  console.log(`Listening on port: ${port}`);
})
