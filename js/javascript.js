var setTitle = function (message)
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
                    return response.json();
                    //maybe put a function call here that updates all the data related parts of the webpage
                } 
                else 
                {
                    console.log("FETCH NOT SUCCESSFUL");
                }
            })

            .then(data => console.log(data));
setTitle("Welcome to Smalmart!"); //Set title once API loaded