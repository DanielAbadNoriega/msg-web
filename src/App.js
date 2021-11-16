import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import Home from "./components/misc/home/Home";
import Regist from "./components/misc/registration/regist/Regist";
import Navbar from "./components/navbar/Navbar";
import ProductsList from "./components/products/products-list/ProductsList";
import ProfesionalDetails from "./components/profesionals/profesional-details/ProfesionalDetails";
import ProfesionalsList from "./components/profesionals/profesionals-list/ProfesionalsList";
import RecipeDetails from "./components/recipes/recipe-details/RecipeDetails";
import RecipesList from "./components/recipes/recipes-list/RecipesList";
import RestaurantDetails from "./components/restaurants/restaurant-details/RestaurantDetails";
import RestaurantsList from "./components/restaurants/restaurants-list/RestaurantsList";
import ShopDetails from "./components/shops/shop-details/ShopDetails";
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
          
          <Route exact path="/profesionals/:id" component={ProfesionalDetails} />

          {/* Recipes */}
          <Route exact path="/recipes" component={RecipesList} />

          <Route exact path="/recipes/:id" component={RecipeDetails} />

          {/* Restaurants */}
          <Route exact path="/restaurants" component={RestaurantsList} />

          <Route exact path="/restaurants/:id" component={RestaurantDetails} />

          {/* Shops */}
          <Route exact path="/shops" component={ShopsList} />

          <Route exact path="/shops/:id" component={ShopDetails} />

          {/* Regist/Login */}
          <Route exact path="/login" component={Regist} />

          <Redirect to="/home" />

        </Switch>
      </div>
    
  );
}

export default App;
