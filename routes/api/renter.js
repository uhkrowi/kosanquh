var express = require('express');
var router = express.Router();
var db = require('../../server/db.js');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', async (req, res) => {
    let result = await db.Renter.findAll();

    res.send(result)
    // db.Renter.findAll()
    // .then(x => res.send(x))
    // .catch(err => res.send(err))
})

router.get('/:id', (req, res) => {
    db.Renter.findByPk(req.params.id)
    .then(x => res.send(x))
    .catch(err => res.send(err))
})

router.post('/', (req, res) => {
    db.Renter.create(req.body)
    .then(_ => res.send("Data berhasil disimpan"))
    .catch(err => res.send(err))
})

module.exports = router;