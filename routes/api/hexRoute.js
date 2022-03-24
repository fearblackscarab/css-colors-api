const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

router.get('/colors/:id', (req, res) => {
    const id=req.params.id;
    const url = `https://api.sampleapis.com/csscolornames/colors/${id}`;
    fetch(url).then(res => res.json()).then(data => {
        res.render('pages/hex', {
            title: `${data.name}`,
            name: `${data.name}`,
            hex: `${data.hex}`,
            data
        })
    })
});

module.exports = router;