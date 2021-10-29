import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/misc/home/Home";
import Regist from "./components/misc/regist/Regist";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/products-list/ProductsList";
import ProfesionalsList from "./components/profesionals/profesionals-list/ProfesionalsList";
import RecipeDetails from "./components/recipes/recipe-details/RecipeDetails";
import RecipesList from "./components/recipes/recipes-list/RecipesList";
import RestaurantsList from "./components/restaurants/restaurants-list/RestaurantsList";
import ShopsList from "./components/shops/shops-list/ShopsList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        {/* Home */}
        <Route exact path="/home" component={Home} />

        {/* Products */}
        <Route exact path="/products" component={ProductsList} />

        {/* Profesionals */}
        <Route exact path="/profesionals" component={ProfesionalsList} />

        {/* Recipes */}
        <Route exact path="/recipes" component={RecipesList} />

        <Route exact path="/recipes/:id" component={RecipeDetails} />

        {/* Restaurants */}
        <Route exact path="/restaurants" component={RestaurantsList} />

        {/* Shops */}
        <Route exact path="/shops" component={ShopsList} />

        {/* Regist/Login */}
        <Route exact path="/login" component={Regist} />
      </Switch>
    </div>
  );
}

export default App;
