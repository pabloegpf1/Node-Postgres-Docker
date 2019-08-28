exports.users = require('./users')

exports.showIndexPage = (req,res) =>{    
    res.render('index',{
        title: "Node-Postgres-Docker Template",
    })
}