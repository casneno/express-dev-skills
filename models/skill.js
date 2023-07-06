const skills = require("../controllers/skills");

const devSkills = [
    {id: 1234, project: 'BattleShips', description: "a game where you have to sink the AI's fleet before it can sink your's", tech: 'HTML, CSS, JavaScript', lvl: '8/10',},
    {id: 5678, project: 'Express Dev', description: 'JS Express exercise', tech: 'HTML, CSS, JavaScript, Express', lvl: '6/10',},
    {id: 9101, project: 'Tic-Tac-Toe', description: "a game where, to win, you must get 3 symbols in a row but stop your opponent from getting their's", tech: 'HTML, CSS, JavaScript', lvl: '7/10'},
    {id: 2131, project: 'DevSkills', description: 'this webpage', tech: 'HTML, CSS, JavaScript, Node, Express', lvl: '6/10'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};

function update(id, updatedProject) {
    id = parseInt(id);
    let projectRep = devSkills.find(skill => skill.id === id)
    Object.assign(projectRep, updatedProject);
} 

function deleteOne(id){
    id = parseInt(id)
    const idx = devSkills.findIndex(skill => skill.id === id);
    devSkills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    devSkills.push(skill);
}

function getAll (){
    return devSkills;
}

function getOne (id){
    id = parseInt(id)
    return devSkills.find(skill => skill.id === id)
}