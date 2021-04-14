const userService = require('../services/user.service')


module.exports = {
    authenticate,
    getAllUsers,
    register,
    getGoals,
    setGoals,
    getByName
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


function getGoals(req, res, next) {

    userService.getGoals(req.params.username)
        .then(goals => res.json(goals))
        .catch(err => next(err));
}

function setGoals(req, res, next) {
    userService.setGoals(req.body, req.user.sub)
        .then(() => res.json({}))
        .catch(err => next(err));
}
