const path = require('path')
class HomeController{
    index(req,res){
        res.sendFile(path.join(__dirname, '../views/page/home.html'))
    }
}

module.exports = new HomeController