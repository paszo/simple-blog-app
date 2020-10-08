const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/', blogController.get_index);
router.get('/about', blogController.get_about);
router.get('/blogs', blogController.get_blogs);
router.post('/blogs/create', blogController.post_blog_create);
router.get('/blogs/create', blogController.get_blog_create);
router.get('/blogs/:id', blogController.get_blog_details);
router.delete('/blogs/:id', blogController.delete_blog);
router.use(blogController.not_found);

module.exports = router;

