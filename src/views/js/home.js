listLaptop = [{
    "title": "HP 15s fq5229TU i3 1215U (8U237PA)",
    "img": "lap1.png",
    "price": "11.190.000đ"
},
{
    "title": "Asus Vivobook X415EA i3 1115G4 (EK2034W)",
    "img": "lap2.jpg",
    "price": "8.990.000đ"
},
{
    "title": "Lenovo Ideapad 3 15IAU7 i3 1215U (82RK005LVN)",
    "img": "lap3.jpg",
    "price": "8.960.000đ"
},
{
    "title": "Acer Aspire 7 Gaming A715 76G 59MW i5 12450H (NH.QMYSV.001)",
    "img": "lap4.jpg",
    "price": "17.990.000đ"
},
{
    "title": "MSI Modern 14 C11M i3 1115G4 (011VN)",
    "img": "lap5.jpg",
    "price": "8.990.000đ"
},
{
    "title": "HP 15s fq5162TU i5 1235U (7C134PA)",
    "img": "lap6.jpg",
    "price": "15.690.000đ"
},
{
    "title": "Dell Vostro 15 3520 i3 1215U1 (5M2TT1)",
    "img": "lap7.png",
    "price": "11.990.000đ"
},
{
    "title": "Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H803SFVN)",
    "img": "lap8.jpg",
    "price": "8.690.000đ"
},
{
    "title": "Asus Vivobook 15 X1504ZA i3 1215U (NJ102W)",
    "img": "lap9.jpg",
    "price": "10.490.000đ"
},
{
    "title": "Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002)",
    "img": "lap10.jpg",
    "price": "19.890.000đ"
},
{
    "title": "HP 15s fq5229TU i3 1215U (8U237PA)",
    "img": "lap1.png",
    "price": "11.190.000đ"
},
{
    "title": "Asus Vivobook X415EA i3 1115G4 (EK2034W)",
    "img": "lap2.jpg",
    "price": "8.990.000đ"
},
{
    "title": "Lenovo Ideapad 3 15IAU7 i3 1215U (82RK005LVN)",
    "img": "lap3.jpg",
    "price": "8.960.000đ"
},
{
    "title": "Acer Aspire 7 Gaming A715 76G 59MW i5 12450H (NH.QMYSV.001)",
    "img": "lap4.jpg",
    "price": "17.990.000đ"
},
{
    "title": "MSI Modern 14 C11M i3 1115G4 (011VN)",
    "img": "lap5.jpg",
    "price": "8.990.000đ"
},
{
    "title": "HP 15s fq5162TU i5 1235U (7C134PA)",
    "img": "lap6.jpg",
    "price": "15.690.000đ"
},
{
    "title": "Dell Vostro 15 3520 i3 1215U1 (5M2TT1)",
    "img": "lap7.png",
    "price": "11.990.000đ"
},
{
    "title": "Lenovo Ideapad 3 15ITL6 i3 1115G4 (82H803SFVN)",
    "img": "lap8.jpg",
    "price": "8.690.000đ"
},
{
    "title": "Asus Vivobook 15 X1504ZA i3 1215U (NJ102W)",
    "img": "lap9.jpg",
    "price": "10.490.000đ"
},
{
    "title": "Acer Aspire 7 Gaming A715 76G 5806 i5 12450H (NH.QMFSV.002)",
    "img": "lap10.jpg",
    "price": "19.890.000đ"
},
]

await fetch("http://localhost:3000/api/getalllaptop", {
    headers: {
        "Content-Type": "application/json",
    },
    method: "GET",
}).then((data) => data.json()).then((data) => {
//list laptop
})

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) { counter = 1; }
}, 5000);

function navigate() {
    window.location.href = "purchase.html?laptop="
}
let listLaptopHTML = ""
listLaptop.forEach(laptop => {
    listLaptopHTML += `
     <div class="laptop">
        <div class="laptop-img">
            <img src="../assets/`+ laptop.img + `" alt="">
        </div>
        <div>
            <p class="laptop-title">` + laptop.title + `</p>
        </div>
        <div class="laptop-price">`+ laptop.price + `</div>
        <div class="buy-laptop" onclick="window.location.href ='purchase?laptop=`+ laptop.title + `&price=` + laptop.price + `'">
            <p>mua</p>
        </div>
    </div>`
})

document.getElementById("listLaptop").innerHTML = listLaptopHTML
