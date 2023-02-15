
const products = [{
    name: "HTML Course",
    image: "html-icon-logo.png",
    price: 500.99,
    qtty: 1
},{
    name: "CSS Course", 
    image: "css-icon-logo.png",
    price: 800.5,
    qtty: 1
},{
    name: "JSS Course",
    image: "js-icon-logo.png",
    price: 2100.0,
    qtty: 1
}];

for (let val of products){
    document.getElementById("products").innerHTML += `<div class="column">
    <p>${val.name}</p>
    <p>${val.price}</p> 
    <img src="images/${val.image}" width="150"><br>
    <input type="submit" value="add to cart" class="addToCart">
    </div>`;
}

let cart = [];

let btns = document.getElementsByClassName("addToCart");
console.log(btns);
for (let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        addToCart(products[i]);
        total();
    })
}
function addToCart(ojb){
    if()
}



// for (let val of products){
//     document.getElementById("products").innerHTML += `
//     <div class="column"><p>${val.name}</p>
//     <p>${val.price}</p>
//     <img src="images/${val.image}" width="150"><br>
//     <input type="submit" value="add to cart" class="addTocart"></div>
//     `;
// }

// // 0 -> arr.length

// for(let i = 0; i < products.length; ++i){
//     // 
//     let color = "red";
//     if(products[i].price > 600){
//         color = "green";
       
//     } 

//     document.getElementsByClassName("products")[0].innerHTML += `
//     <div class="column"><p>${products[i].name}</p>
//     <p style="color: ${color}">${products[i].price}</p>
//     <img src="images/${products[i].image}" width="150"><br>
//     <input type="submit" value="add to cart" class="addTocart"></div>
//     `;
// }
// if(products[0].price )
// document.getElementById("products").innerHTML += `
// <div class="column"><p>${products[0].name}</p>
// <p>${products[0].price}</p>
// <img src="images/${products[0].image}" width="150"><br>
// <input type="submit" value="add to cart" class="addTocart"></div>
// `;

// document.getElementById("products").innerHTML += `
// <div class="column"><p>${products[1].name}</p>
// <p>${products[1].price}</p>
// <img src="images/${products[1].image}" width="150"><br>
// <input type="submit" value="add to cart" class="addTocart"></div>
// `;

// document.getElementById("products").innerHTML += `
// <div class="column"><p>${products[2].name}</p>
// <p>${products[2].price}</p>
// <img src="images/${products[2].image}" width="150"><br>
// <input type="submit" value="add to cart" class="addTocart"></div>
// `;

// let arr = ["Rob"];
// console.log(arr[0])