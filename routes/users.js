var express = require('express');
var router = express.Router();

var user = require('../controller/userController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post('/login',user.u_login)
router.post('/register',user.u_register)
router.post('/add_cate',user.add_category)
router.post('/add_blog',upload.single('blog_img'),user.add_blog)
router.get('/view_blog',user.view_blog)
router.post('/manage_blog/:id',user.update_blog)
router.get('/manage_blog/:id',user.delete_blog)
router.get('/like_blog/:id',user.like_blog)
router.post('/comment_blog/:id',user.comment_blog)
router.get('/view_comment/:id',user.view_comment)

module.exports = router;
