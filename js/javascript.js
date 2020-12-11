var setTitle = function (message)
{
    d3.select("#title")
    .text(message)
    .attr("style", "font-size:60px")
}
console.log("Hello World!");
//SHOUTOUT TO FakeStore API! A great FREE API that provides fake products, carts, and users. Everything you need to create a model store web app.
fetch('https://fakestoreapi.com/products')
            //.then(response => response.json())
            .then(console.log(response => response.text())) //for troubleshooting purposes
            .then(data => console.log(data));