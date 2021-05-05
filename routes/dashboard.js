import express from 'express';
const router = express.Router();

//Render Login Page from View Folder
router.get('/', function(req, res, next) {
    res.render('Dashboard');
});


module.exports = router;