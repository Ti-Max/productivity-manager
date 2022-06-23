const express = require('express');
const session = require('express-session');
// const cookieParser = require('cookie-parser');
const path = require('path');
const indexRouter = require('./routes/index');
const othersRouter = require('./routes/others');
const submitRouter = require('./routes/submitHourse');
const login = require('./routes/login');
const app = express();
const port = 8000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// app.use(cookieParser());
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
app.use(othersRouter);
app.use(login);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});