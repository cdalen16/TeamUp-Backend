const userService = require('../services/user.service')


module.exports = {
    authenticate,
    getAllUsers,
    register,
    getByName,
    changePass,
    changeUserBio
};


function authenticate(req, res, next) {
    console.log("Authenticate():", req.body);
       userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAllUsers(req, res, next) {
    userService.getAllUsers()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function register(req, res, next) {

   userService.addUser(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getByName(req, res, next) {

    userService.getByUsername(req.params.username)
        .then(user => res.json(user))
        .catch(err => next(err));
}


function changePass(req, res, next) {
    userService.changePassword(req.body, req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}
function changeUserBio(req, res, next) {
    userService.changeBio(req.body, req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}
