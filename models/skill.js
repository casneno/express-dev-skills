const skills = require("../controllers/skills");

const devSkills = [
    {project: 'BattleShips', description: "a game where you have to sink the AI's fleet before it can sink your's", tech: 'HTML, CSS, JavaScript', lvl: '8/10',},
    {project: 'Express Dev', description: 'JS Express exercise', tech: 'HTML, CSS, JavaScript, Express', lvl: '6/10',},
    {project: 'Tic-Tac-Toe', description: "a game where, to win, you must get 3 symbols in a row but stop your opponent from getting their's", tech: 'HTML, CSS, JavaScript', lvl: '7/10'},
    {project: 'DevSkills', description: 'this webpage', tech: 'HTML, CSS, JavaScript, Node, Express', lvl: '6/10'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
};

function deleteOne(project){
    const idx = devSkills.findIndex(skill => skill.project === project);
    devSkills.splice(idx, 1);
}

function create(skill) {
    devSkills.push(skill);
}

function getAll (){
    return devSkills;
}

function getOne (project){
    return devSkills.find(skill => skill.project === project)
}