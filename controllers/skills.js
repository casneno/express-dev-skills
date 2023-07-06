const Skill = require ('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
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