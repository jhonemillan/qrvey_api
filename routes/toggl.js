var express = require('express');
var router = express.Router();
var Toggl = require('../models/Toggl');

router.get('/:id_profile/all', (req, res)=>{    
    Toggl.find({'id_profile' : req.params.id_profile})
    .sort({ date: 'desc'})
    .then((toggls)=>{
        if (!toggls) {
            res.json({ success: true, toggls: {} });    
        }
        res.json({ success: true, toggls: toggls });
    })
    .catch((err)=>{
        res.json({ success: false, toggls: err.message });
    })
});

router.post('/new', (req, res)=>{
    const newToggl = new Toggl();
    newToggl.id_profile = req.body.id_profile;
    newToggl.task = req.body.task;
    newToggl.horas = req.body.horas;
    newToggl.minutos = req.body.minutos;
    newToggl.segundos = req.body.segundos;

    newToggl.save().then((obj)=>{
        res.json({success: true, message: 'Toggl saved'});
    });
});

module.exports = router;