const User = require('../models/blog');

const get_index = (req, res) => {
    res.render('index');
};

const get_blogs = (req, res) => {
    User.find()
        .then(results => {
            res.send(JSON.stringify(results));
        })
        .catch((err) => {
            console.log(err);
            res.send('something went wrong');
        });
};

const get_blog = (req, res) => {
    const id = req.params.id;
    User.findById(id)
        .then(result => {
            res.send(JSON.stringify(result));
        })
        .catch((err) => {
            console.log(err);
            res.send('not found user');
        });
};

const not_found = (req, res) => {
    res.status(404).render('404');
};

const get_about = (req, res) => {
    res.render('about');
};

module.exports = {
    get_blogs,
    get_blog,
    get_index,
    not_found,
    get_about
}