var setTitle = function(message)
{
    d3.select("#title")
    .text(message)
    .attr("style", "font-size:60px")
}
//SHOUTOUT TO FakeStore API! A great FREE API that provides fake products, carts, and users. Everything you need to create a model store web app.
//Promise
fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (response.ok) 
                {
                    console.log("FETCH SUCCESS");
                    setTitle("Welcome to Smalmart!"); //Set title once API loaded
                    return response.json();
                    //maybe put a function call here that updates all the data related parts of the webpage
                } 
                else 
                {
                    console.log("FETCH NOT SUCCESSFUL");
                }
            })

            .then(data => console.log(data));          
d3.select('body')
.append('div')
.text('Navigation Bar')
.attr('id','navigation');

d3.select('body')
.append('div')
.append('h3')
.text('Products')
.attr('id','productsHeading');

var dataPromise = d3.json("https://fakestoreapi.com/products");
dataPromise.then(
    function(products)
    {
        d3.select('body')
        .append('div')
        .text(products[0].title)
        .attr('id','product1');

        d3.select('#productsHeading')
        .selectAll("li")
        .data(dataPromise)
        .enter()
        .append("span")
        .attr("id", "products")
        .append("ul")
        .append("li")
        .attr("id", "productName")
        .text(function(products)
        {
            var i;
            for (i=0;i<21;i++)
            {
                return products[i].title;
            }
        })
    }
)
