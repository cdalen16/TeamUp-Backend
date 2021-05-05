const db = require('../_helpers/database');
const Team = db.Team;
const User = db.User;

module.exports = {
    getAllTeams,
    deleteTeam,
    addTeam,
    editTeam,
    join
}

async function getAllTeams(){
    return await Team.find().populate({path:'createdBy', select:'teamName'})
}

async function deleteTeam(username, date) {
    // console.log(username)
    const temp = await Team.findOne({createdBy: username, createdDate: date});
    if(!temp){
        throw 'You cannot edit the team since it was not created by you.';
    }
    return await Team.deleteOne({'createdDate':date});
}

async function addTeam({team, username},userid){
    const user  = await User.findOne({ username })
    if (await Team.findOne({createdBy: userid, createdDate: team.createdDate})){
        throw team.teamName + ' created by"' + team.createdBy +" on "+ team.createdDate +'" already exists';
    }
    else if(!userid){
        throw 'Error with the user submitting the request. User information missing. Malformed request.';
    }

    let newTeam = team;
    team.createdBy = userid;
    team.teamMembers = [user];
    team.createdDate =  Date.now();

    dbrecord = new Team(newTeam);
    // save the record
    await dbrecord.save();
}

async function editTeam(team, userid){
    console.log(userid, team.teamName)
    // const user = await User.findOne({username})
    const temp = await Team.findOne({createdBy: userid, teamName: team.teamName});

    if(!temp){
        throw 'You cannot edit the team since it was not created by you.';
    }
    await temp.updateOne({$set: {class: team.class, teamName: team.teamName, teamCap: team.teamCap, description: team.description}});
    await temp.save();
}

async function join(team, userid){
    let found = 0;
    // console.log(team.teamSize);
    for (let i = 0; i < team.teamSize; i++){
        const thisuser = await  team.teamMembers[i];
        if(thisuser._id === userid){
            found+=1;
        }
    }
    const user = await  User.findOne({_id: userid})
    const t = await Team.findOne({teamName:team.teamName, createdDate: team.createdDate})
    if(found === 0){
        let newTeam = await team.teamMembers;
        await newTeam.push(user);
        // team.teamSize+=1;
        // console.log(newTeam)
        await t.updateOne({$set: {teamMembers: newTeam, teamSize: team.teamSize+1}});
        await t.save();
    }
}
