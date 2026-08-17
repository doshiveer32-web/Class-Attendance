function placeOrder() {
    const output = document.getElementById("output");
    output.innerHTML = "";
 
    new Promise((resolve) => {
        setTimeout(() => {
            output.innerHTML += "Customer login verified successfully.<br>";
            resolve({ customerName: "John" });
        }, 500);
    })
    .then(customer => new Promise((resolve) => {
        setTimeout(() => {
            const restaurant = { name: "Pizza Corner", location: "Downtown" };
            output.innerHTML += "Restaurant details retrieved successfully for " + restaurant.name + ".<br>";
            resolve({ customer, restaurant });
        }, 600);
    }))
    .then(data => new Promise((resolve) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/recipes")
                .then(response => response.json())
                .then(menuData => {
                    output.innerHTML += "Menu items fetched successfully.<br>";
                    resolve({ ...data, menuItems: menuData.recipes.map(recipe => recipe.name) });
                });
        }, 700);
    }))
    .then(data => {
        output.innerHTML += "Available dishes:<br>";
        data.menuItems.forEach((dish, index) => {
            output.innerHTML += (index + 1) + ". " + dish + "<br>";
        });
    })
    .catch(error => {
        output.innerHTML = "Error: " + error;
    });
}