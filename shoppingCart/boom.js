
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
    document.getElementById("products").innerHTML += `<p>${val.name}</p>
    <p>${val.price}</p>
    <img src="images/${val.image}" width="150"><br>
    <input type="submit" value="add to cart" class="addTocart">
    <hr>`;
}