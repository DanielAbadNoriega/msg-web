import React from "react";
import Shop from "../shop/Shop"
import shopsData from "../../../data/shop.json"

function ShopsList() {
    const shops = shopsData;

    return(
        <div className="container">
            <h3>Shops List</h3>
            <div className="row">
            {shops && shops.map(shop => (
              <Shop 
                {...shop}
                key={shop.id}
              />
            ))}
            </div>
        </div>
    )
}

export default ShopsList;