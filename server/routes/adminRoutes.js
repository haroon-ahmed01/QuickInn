const express = require('express');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();

router.get('/dashboard', isAdmin, (req, res) => {
  res.json({ message: `Welcome Admin ${req.user.name}` });
});

module.exports = router;
