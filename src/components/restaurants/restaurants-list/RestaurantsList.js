import React from "react";
import Restaurant from "../restaurant/Restaurant";
import restaurantsData from "../../../data/restaurants.json";

function RestaurantsList() {
  const restaurants = restaurantsData;
  return (
    <div className="container mt-5">
      <h3>Restaurants List</h3>
      <div className="row">
        {restaurants &&
          restaurants.map((restaurant) => (
            <Restaurant {...restaurant} key={restaurant.id} />
          ))}
      </div>
    </div>
  );
}

export default RestaurantsList;