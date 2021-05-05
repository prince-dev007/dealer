import express from 'express';
const router = express.Router();

//Render Login Page from View Folder
router.get('/', function(req, res, next) {
    res.render('login');
});


module.exports = router;