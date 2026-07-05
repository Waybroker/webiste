const params =new URLSearchParams(window.location.search);

const name_param = params.get("name");
const price_param = params.get("price");
const img_param = params.get("imgSrc");
const time = params.get("time");
const description = params.get("desc");

document.title = `akar_salim/${name_param}`;



let product_container = document.getElementById("product-container");
let img = product_container.querySelector("img");
let product_name = product_container.querySelector(".product-title");
let product_price = product_container.querySelector(".price-tag");
let timespan = product_container.querySelector(".period");
let timeli = document.querySelector("#time");
let de = document.querySelector(".description");



timeli.innerHTML = time;
de.innerHTML = description;
img.src = img_param;
product_name.innerHTML = name_param;
product_price.innerHTML = `<div class="price-tag">
                    ${price_param} <span class="period">/ ${time}</span>
                </div>`;


