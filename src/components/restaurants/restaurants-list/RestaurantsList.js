import React, { useEffect, useState } from "react";
import Restaurant from "../restaurant/Restaurant";
import restaurantsService from "../../../services/restaurants-service"

function RestaurantsList() {

  const [ restaurants, setRestaurants ] = useState(null)

  useEffect(() => {
    restaurantsService.list()
      .then(data => setRestaurants(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="container mt-5">
      <h3>Restaurants</h3>
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