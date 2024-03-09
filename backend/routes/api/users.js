const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/Users');
const config = require('config');
const auth = require('../../middleware/auth');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 characters or more'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log("Button clicked");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({ name, email, avatar, password });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtsecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log("Here is the error");
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/:email', auth, async (req, res) => {
  try {
    const data = await User.findOne({ email: req.params.email });
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/id/:id', auth, async (req, res) => {
  try {
    const data = await User.findOne({ _id: req.params.id });
    res.json(data);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;