const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller');

router.get('/', controller.index)
router.get('/index', (req, res) => {
    res.redirect('/')
})
router.get('/about', controller.about)
router.get('/contact', controller.contact)
router.get('/portfolio', controller.portfolio)



module.exports = router;
