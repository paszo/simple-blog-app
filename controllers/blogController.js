const Blog = require('../models/blog');

const get_index = (req, res) => {
    res.render('index');
};

const get_blogs = (req, res) => {
    Blog.find().sort({'createdAt': -1})
        .then(results => {
            console.log(results);
            res.render('blogs/index', {blogs: results});
        })
        .catch((err) => {
            console.log(err);
            res.send('something went wrong');
        });
};

const get_blog_details = (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    console.log(id);
    Blog.findById(id)
        .then( data => {
            console.log('data send to view: ', data);
           res.render('blogs/details', {blog: data})
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404');
        });
};

const not_found = (req, res) => {
    res.status(404).render('404');
};

const get_about = (req, res) => {
    res.render('about');
};

const get_blog_create = (req, res) => {
    res.render('blogs/create');
};

const post_blog_create = (req, res) => {
    const data = req.body;
    Blog.create(data)
        .then((response) => {
            console.log(response);
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
            res.status(404).render('404');
        })
};

const delete_blog = (req, res) => {
    const id = req.params.id;
    console.log('id of request is ...', id);
    Blog.findByIdAndDelete(id)
        .then((result) => {
               res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        })
};

module.exports = {
    get_blogs,
    get_blog_details,
    get_index,
    not_found,
    get_about,
    get_blog_create,
    post_blog_create,
    delete_blog
}