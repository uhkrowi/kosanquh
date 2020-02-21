var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('renter/index', {title: 'Renter'})
})

module.exports = router;