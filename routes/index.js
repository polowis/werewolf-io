const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next){
    res.render('index', {title: "Werewolf online"})
})
router.get('/lobby', function(req, res, next){
    res.render('lobby', {title: "Werewolf online"})
})

module.exports = router