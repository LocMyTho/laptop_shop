const homeController = require("../controller/homeController")
const purchaseController = require("../controller/purchaseController")
const thanksController = require("../controller/thanksController")
function router(app) {
    //route page
    app.get('/', homeController.index)
    app.get('/purchase', purchaseController.index)
    app.get('/thanks', thanksController.index)
    //route api

    app.post('/api/purchase', purchaseController.payWithMoMoAtm)
    app.get('/api/getalllaptop', homeController.getAllLaptop)


}


module.exports = router