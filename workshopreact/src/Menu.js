const data = require('./data.json')

function Menu() {
    const pizzaList = data.Pizza.map((pizzaItem) =>
        <div>
            <h3> { pizzaItem.name } </h3>
            <p> Price: { pizzaItem.price } </p>
            <p> Ingredients: { pizzaItem.ingredients } </p>
            <img src={pizzaItem.image} alt="pizza"/>
        </div>
    );
    return (
        <div class="menu">
            <h1>Menu page</h1>
            <div className="pizzas"> { pizzaList } </div>
        </div>
    );
}

export default Menu;