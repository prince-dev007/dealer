import express from 'express';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
app.use(express.json());
const loginRouter = require('./routes/login');
const dashboardRouter = require('./routes/dashboard');
//Setup View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Join Public Fodler
app.use(express.static(path.join(__dirname, 'public')));
//Login Router 
app.use('/',loginRouter);
app.use('/Dashboard',dashboardRouter);
app.listen(process.env.APP_PORT, () => console.log(`SERVER STARTED AT PORT ${process.env.APP_PORT}`));