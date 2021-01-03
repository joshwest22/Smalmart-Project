document.title = "Smalmart"; //updates the title seen in the tab
window.onload = function setTitle()
{
    document.getElementsByTagName("H1")[0].innerHTML = "Welcome to Smalmart!";
}
//SHOUTOUT TO FakeStore API! A great FREE API that provides fake products, carts, and users. Everything you need to create a model store web app.
//Promise
fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (response.ok) 
                {
                    console.log("FETCH SUCCESS");
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
.attr('id','navigation')
.attr('style','font-size: 28')

d3.select('body')
.append('div')
.append('h3')
.text('Products')
.attr('id','productsHeading');

class Product //in case we ever need it
{
    constructor(id,title,category)
    {
        this.id = id;
        this.title = title;
        this.category = category;
    }

    get id()
    {
        return this._id;
    }

    get title()
    {
        return this._title;
    }

    get category()
    {
        return this._category;
    }
}
var dataPromise = d3.json("https://fakestoreapi.com/products");
dataPromise.then(
    function(products)
    {
        /* d3.select('body')
        .append('div')
        .text(products[0].title)
        .attr('id','product1'); */
       
        d3.select('#productsHeading')
        .selectAll('li')
        .data(products)
        .enter()
        .append("div")
        .append("ul")
        .append("li")
        .attr("id", "productName")
        .text(function(product)
        {  
            return product.title;
        });
    }
)
