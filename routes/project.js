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

router.post('/add',(req, res)=>{
    let newProject = new Project();
    newProject.name = req.body.name;

    newProject
    .save()
    .then((p)=>{
        res.status(201).send({success: true, project: p});
    })
    .catch((e)=>{
        res.status(500).send({success: false, project: e.message});
    })
})

module.exports = router;