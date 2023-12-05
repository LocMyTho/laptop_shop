let urlParam = new URLSearchParams(window.location.search)
let laptop = urlParam.get('laptop')
let price = urlParam.get('price')


document.getElementById("productName").innerHTML = laptop
document.getElementById("productPrice").innerHTML = price
document.getElementById('form').addEventListener('submit', async function (event) {
    event.preventDefault()

    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    await fetch("http://localhost:3000/api/purchase", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(

            {
                "name": name,
                "phoneNumber": phoneNumber,
                "email": email,
                "address": address,
                "laptop": laptop,
                "price": price,
            }
        )
    })
        .then(data => {
            return data.json()
        })
        .then(data => {
            console.log(data);
            window.location.href=data.payUrl

        }).catch(err => {
            console.log(err);
        })

})



