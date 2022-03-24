const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.get('/colors', (req, res) => {
    const url = 'https://api.sampleapis.com/csscolornames/colors';
    fetch(url).then(res => res.json()).then(data => {
        res.render('pages/colors', {
            title: 'Colors',
            name: 'Color options',
            data
        })
    })
});

module.exports = router;