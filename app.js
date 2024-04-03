let arr = [
  {
    name: "lenovo",
    imgScr:
      "https://static.price.ru/images/models/-/kompyuter-monoblok/lenovo-ideacentre-520-24iku-f0d200b3rk-/992e36c9c0930ffb6c0b2ad589787683.JPEG",
    price: 500,
    color: "black",
    sharx: "dasturlash ish uchun qulay kompyuter",
  },
  {
    name: "asus rog",
    imgScr:
      " https://static.onlinetrade.ru/img/items/m/asus_rog_strix_g513rw_hq198_90nr0895_m00aa0__2307648_5.jpg",
    price: 1200,
    color: "black",
    sharx: "oyin dasturlash xamasi uchun <br> engoz kompyuer",
  },
  {
    name: "hp victus",
    imgScr:
      "https://i5.walmartimages.com/asr/ef37a33f-074f-4a95-95fd-69dd9254d103.5458966bab0101578b149dff889dccde.jpeg",
    price: 650,
    color: "black",
    sharx: "oyn ishq bozlari uchun <br> kompyuter",
  },
  {
    name: "macbok",
    imgScr:
      "https://мобилакс.рф/wa-data/public/shop/products/30/02/10230/images/11504/11504.750x0.jpg",
    price: 1500,
    color: "white",
    sharx: "dizaynerlar uchun mukamal kompyuter",
  },
  {
    name: "acer",
    imgScr: "https://d3fa68hw0m2vcc.cloudfront.net/832/101790806.jpeg",
    price: 550,
    color: "black",
    sharx: "acer ish uchun juda <br> qulay kompyuter",
  },
  {
    name: "samsung",
    imgScr:
      "https://savelashop.ru/wa-data/public/shop/products/92/86/8692/images/14451/14451.970.jpg",
    price: 1650,
    color: "white",
    sharx: "samsung kompanyadidan kyuchli <br> kampyuter",
  },
];

let htmlprod = "";

let Product = document.querySelector("#Product");
arr.forEach(({ name, price, imgScr, color, sharx }) => {
  let li = `<li class="list-item">
  <img src="${imgScr}" alt="" width = '200' height='200'/>
          <h2>${name}</h2>
          <p>${price}</p>
          <span style='background: ${color}'></span>
          <p>${sharx}</p>
          </li>`;

  htmlprod += li;
});
Product.innerHTML = htmlprod;
