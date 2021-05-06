import express from 'express';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
const app = express();
import dotenv from 'dotenv';
const PORT = process.env.APP_PORT || 4000
dotenv.config();
app.use(express.json());
const loginRouter = require('./routes/login');
const dashboardRouter = require('./routes/dashboard');
//Setup View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
//Join Public Fodler
app.use(express.static(path.join(__dirname, 'public')));
//Login Router 
app.use('/',loginRouter);
app.use('/Dashboard',dashboardRouter);
console.log(PORT);
app.listen(PORT);