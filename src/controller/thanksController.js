const path = require('path')
class ThanksController{
    index(req,res){
        res.sendFile(path.join(__dirname, '../views/page/thanks.html'))
    }
}

module.exports = new ThanksController