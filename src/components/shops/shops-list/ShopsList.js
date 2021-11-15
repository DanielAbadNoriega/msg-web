import React, { useEffect, useState } from "react";
import Shop from "../shop/Shop";
import shopsService from "../../../services/shops-service"

function ShopsList() {
  const [ shops, setShops ] = useState(null)

  useEffect(() => {
    shopsService.list()
      .then(data => setShops(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="container mt-5">
      <h3 className="text-white">Shops</h3>
      <div className="row">
        {shops && shops.map((shop) => <Shop {...shop} key={shop.id} />)}
      </div>
    </div>
  );
}

export default ShopsList;