const homeController = require("../controller/homeController")
const purchaseController = require("../controller/purchaseController")
const thanksController = require("../controller/thanksController")
const historyOder = require("../controller/historyOderController")
function router(app) {
    //route page
    app.get('/', homeController.index)
    app.get('/purchase', purchaseController.index)
    app.get('/thanks', thanksController.index)
    app.get('/historyoder', historyOder.index)
    //route api

    app.post('/api/purchase', purchaseController.payWithMoMoAtm)
    app.get('/api/getalllaptop', homeController.getAllLaptop)
    app.post('/api/getlaptop', purchaseController.getLaptop)
    app.get('/api/historyoder', historyOder.getHistoryOder)
    app.post('/api/completeorder',thanksController.completePurechase)


}


module.exports = router