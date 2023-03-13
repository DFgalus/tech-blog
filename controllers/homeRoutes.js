const router = require('express').Router();
const { Post, Comment, User } = require('../models');

//Get all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    atttributes: ['name']
                },
            ],
        });
        //serialize data
        const posts = postData.map((post) => post.get({ plain: true}));
        //pass serialized data and session flag to template
        res.render('homepage', {
            posts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//view one post
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //login, redirects if not logged in
  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;