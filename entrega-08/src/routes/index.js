const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send({
        titulo: 'Hey, girl! Vem aqui conferir essa playlist GirlPower do jeito que tu gosta!',
        update: '03/10/2020'
    });
});

module.exports = router;