const path = require('path')
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient
class PurchaseController {
    index(req, res) {
        res.sendFile(path.join(__dirname, '../views/page/purchase.html'))
    }

    async payWithMoMoAtm(req, res) {
        let price = req.body.price.replace(/\./g, "").replace("đ", "");

        let partnerCode = "MOMOBKUN20180529";
        let accessKey = "klm05TvNBzhg7h7j";
        let secretkey = "at67qH6mk8w5Y1nAyMoYKMWACiEi2bsa";
        let requestId = partnerCode + new Date().getTime();
        let orderId = requestId;
        let orderInfo = req.body.name + "-" + req.body.laptop;
        let redirectUrl = "http://localhost:3000/thanks";
        let ipnUrl = "http://localhost:3000/thanks";
        let amount = Math.round(price * 1.1);
        let userInfo = {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        }
        let deliveryInfo = {
            deliveryAddress: req.body.address,
            deliveryFee: price * 0.1
        }
        let items = [
            {
                id: "1",
                name: req.body.laptop,
                price: price,
                currency: "VND",
                quantity: 1,
                totalPrice: price,
            }
        ]
        let requestType = "payWithATM"
        let extraData = "";
        let rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType

        const crypto = require('crypto');
        let signature = crypto.createHmac('sha256', secretkey)
            .update(rawSignature)
            .digest('hex');
        const requestBody = JSON.stringify({
            partnerCode: partnerCode,
            accessKey: accessKey,
            requestId: requestId,
            amount: amount,
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            userInfo: userInfo,
            deliveryInfo: deliveryInfo,
            items: items,
            signature: signature,
            lang: 'en',
        });
        //Create the HTTPS objects
        const https = require('https');
        const options = {
            hostname: 'test-payment.momo.vn',
            port: 443,
            path: '/v2/gateway/api/create',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody)
            }
        }
        const reqq = await https.request(options, ress => {
            let apiData = '';

            ress.setEncoding('utf8');
            ress.on('data', (body) => {
                console.log('Body: ');
                apiData = body
            });
            ress.on('end', async () => {
                console.log('No more data in response.');
                console.log(apiData);
                //luu
                await prisma.user.create({
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        phone: req.body.phoneNumber,
                        historyOder: {
                            create: {
                                orderId: orderId,
                                address: req.body.address,
                                laptop: {
                                    connectOrCreate: {
                                        where: {
                                            id: 1
                                        },
                                        create: {
                                            name: req.body.laptop,
                                            price: price*1,
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
                res.json(JSON.parse(apiData))
            });
        })
        reqq.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
        });
        console.log("Sending....")
        await reqq.write(requestBody);
        await reqq.end();
    }

}


module.exports = new PurchaseController