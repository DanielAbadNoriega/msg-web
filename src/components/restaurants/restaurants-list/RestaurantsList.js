import React, { useEffect, useState } from "react";
import Restaurant from "../restaurant/Restaurant";
import restaurantsService from "../../../services/restaurants-service";

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    restaurantsService
      .list()
      .then((data) => setRestaurants(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center" style={{ color: "#bea46d" }}>
        Restaurants
      </h1>
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
