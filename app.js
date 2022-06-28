const express = require('express');
const session = require('express-session');
const path = require('path');

// Routes
const indexRouter = require('./routes/index');
const submitRouter = require('./routes/submitHourse');
const loginRouter = require('./routes/login');
const interactive3dRouter = require('./routes/interactive3d');

const app = express();
const port = 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use(session({
  key: 'user_id',
  secret: 'ssshhhhh',
  resave: false,
  saveUninitialized: false,
  cookie:{
    expires: 60 * 60 * 1000
  }
}));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);
app.use(submitRouter);
app.use(loginRouter);
app.use(interactive3dRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});