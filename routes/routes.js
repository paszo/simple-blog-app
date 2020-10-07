const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router.get('/', blogController.get_index);

router.get('/about', blogController.get_about);

router.get('/blogs', blogController.get_blogs);

router.get('/blogs/:id', blogController.get_blog);

router.use(blogController.not_found);

module.exports = router;

