var express = require('express');
var router = express.Router();

var admin = require('../controller/adminController');

router.post('/login',admin.a_login);
router.post('/register',admin.a_register);
router.get('/view_blog',admin.view_blog);
router.get('/view_user_blog/:id',admin.view_user_blog);
router.get('/view_status_blog',admin.view_status_blog);
router.post('/manage_blog/:id',admin.update_blog);
router.get('/manage_blog/:id',admin.delete_blog);
router.post('/manage_user/:id',admin.manage_user);

module.exports = router;
