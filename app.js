const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');


// Error handlers
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

// ROUTES FILES.
const ViewsRouter = require('./routes/ViewsRouter');
const MensenRouter = require('./routes/MensenRouter');
const ExpertiseRouter = require('./routes/ExpertiseRouter');
const ProjectenRouter = require('./routes/ProjectenRouter');
const PublicatiesRouter = require('./routes/PublicatiesRouter');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

// Body parser, reading data from body into req.body
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// 3) ROUTES
app.use('/', ViewsRouter);
app.use('/api/v1/mensen', MensenRouter);
app.use('/api/v1/expertise', ExpertiseRouter);
app.use('/api/v1/projecten', ProjectenRouter);
app.use('/api/v1/publicaties', PublicatiesRouter);




// error
app.use((req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  
app.use(globalErrorHandler);

module.exports = app;