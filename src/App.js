import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/misc/home/Home";
import Regist from "./components/misc/regist/Regist";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/products-list/ProductsList";
import ProfesionalsList from "./components/profesionals/profesionals-list/ProfesionalsList";
import RecipesList from "./components/recipes/recipes-list/RecipesList";
import RestaurantsList from "./components/restaurants/restaurants-list/RestaurantsList";
import ShopsList from "./components/shops/shops-list/ShopsList";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/home" component={Home} />

          <Route exact path="/products" component={ProductsList} />

          <Route exact path="/profesionals" component={ProfesionalsList} />

          <Route exact path="/recipes" component={RecipesList} />

          <Route exact path="/restaurants" component={RestaurantsList} />

          <Route exact path="/shops" component={ShopsList} />

          <Route exact path="/login" component={Regist} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
