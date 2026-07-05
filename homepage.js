let grid = document.getElementById("items-grid");
let children = grid.children;

Array.from(children).forEach((child) => {
    child.addEventListener("click", () => {
        let name = child.querySelector(".name").innerText;
        let price = child.querySelector(".price").innerText;
        let imgSrc = child.querySelector("img").src;
        let time = child.querySelector(".time").innerText;
        let description = child.querySelector("#description").innerText;
 
        
   

        window.location.href = `product.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&imgSrc=${encodeURIComponent(imgSrc)}&time=${encodeURIComponent(time)}&desc=${encodeURIComponent(description)}`;
    })
})