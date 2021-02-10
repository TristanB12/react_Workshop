const data = require('./data.json')

function Menu() {
    const pizzaList = data.Pizza.map((pizzaItem) =>
    <div class="row">
        <div class="col s12 m2">
            <div class="card teal">
                <div class="card-image">
                    <img src={pizzaItem.image} />
                    <span class="card-title"> {pizzaItem.name} </span>
                </div>
                <div class="card-content">
                    <p> {pizzaItem.ingredients} </p>
                </div>
                <div class="card-action">
                    <a href="#">order now</a>
                </div>
            </div>
        </div>
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