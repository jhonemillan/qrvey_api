var express = require('express');
var router = express.Router();
var Project = require('../models/Projects');

router.get('/all', (req, res)=>{    
    Project.find()
    .sort({ date: 'desc'})
    .then((p)=>{
        if (!p) {
            res.json({ success: true, projects: {} });    
        }
        res.json({ success: true, projects: p });
    })
    .catch((err)=>{
        res.json({ success: false, toggls: err.message });
    })
});

module.exports = router;