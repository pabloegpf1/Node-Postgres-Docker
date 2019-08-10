const db = require('../models/queries')

exports.showUsers = (req,res) =>{
    db.Users.getUsers()
    .then((users) => {
        res.render('users',{
            users: users
        })
    })
}