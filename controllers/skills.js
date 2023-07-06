const Skill = require ('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
};

function update (req, res) {
    Skill.update(req.params.id, req.body)
    res.redirect(`/skills/${req.params.id}`)
}

function edit (req, res) {
    res.render('skills/edit', {
        title: 'Edit Skill',
        skill: Skill.getOne(req.params.id) // this 'id' is NOT the 'id' inside my database
    })
};

function deleteSkill (req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function create(req, res) {
    //console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
};

function newSkill(req, res){
    res.render('skills/new', {
        title: 'Add New Skill'
    })
};

function show (req, res) {
    console.log(req.params.id)
    res.render('skills/details', {
        title: 'Skill Details',
        skill: Skill.getOne(req.params.id),
    });
};

function index (req, res) {
    res.render('skills/index', {
        title: 'Skill List',
        skills: Skill.getAll(),
    });
};