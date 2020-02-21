const { configuration } = require('./utilities') 
const createError = require('http-errors')
const express = require('express')
const app = express()
const path = require('path')

// view engine setup
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')))

const renterRoute = require('./routes/renter')
const renterRouteApi = require('./routes/api/renter')

app.get('/', (req, res) => res.send('aaa'))

app.use('/renter', renterRoute);
app.use('/api/renter', renterRouteApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    console.log(err.message)
    res.render('misc/error', {err: err.message});
  });
  
  app.listen(process.env.PORT || configuration.port , () => console.log(`The spell happens on port : ${configuration.port}`))