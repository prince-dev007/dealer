import express from 'express';
const router = express.Router();

//Render Login Page from View Folder
router.get('/', function(req, res, next) {
    const baseUrl = req.protocol + '://' + req.headers.host + '/';
    res.render('login',{baseUrl});

});

module.exports = router;