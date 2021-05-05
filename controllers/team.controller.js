const teamService = require('../services/team.service')


module.exports = {
    deleteTeam,
    getAllTeams,
    addTeam,
    editTeam,
    join
    // getTeamByTeamName
};


function getAllTeams(req, res, next){
    teamService.getAllTeams(req).then(teams=>{console.log(teams);
    res.json(teams)}).catch(err => next(err));
}

function deleteTeam(req, res, next){
    console.log('in deleteTeam method..', req.params.date);
    teamService.deleteTeam(req.user.sub, req.params.date).then(teams =>{
        res.json(teams)}).catch(err => next(err));
}

function addTeam(req, res, next){
    teamService.addTeam(req.body, req.user.sub).then((message)=>res.json(message)).catch(err => next(err))
}

function editTeam(req, res, next){
    teamService.editTeam(req.body, req.user.sub)
        .then(()=>res.json({}))
        .catch(err => next(err));
}


function join(req, res, next){
    teamService.join(req.body, req.user.sub)
        .then(()=>res.json({}))
        .catch(err => next(err));
}
//
// function getTeamByTeamName(req, res, next){
//     teamService.getTeamByTeamName(req.params.)
// }
