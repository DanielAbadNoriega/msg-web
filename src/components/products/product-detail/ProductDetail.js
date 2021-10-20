import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";

function ProductDetail(nutritionPerHundred) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const {
    energy,
    protein,
    fat,
    saturatedFat,
    carbohydrate,
    sugars,
    dietaryFibre,
    sodium,
    potassium,
    transFat,
    polyunsaturatedFat,
    calcium,
    monounsaturatedFat,
    magnesium,
  } = nutritionPerHundred

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div ref={ref}>
      <Button onClick={handleClick} className="btn-success">Detail</Button>

      <Overlay
        show={show}
        target={target}
        placement="left"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Nutrition per hundred</Popover.Header>
          <Popover.Body className="container"> 
          {energy && (
          <p className="card-text">
            <b>Energy: </b> {energy}
          </p>
        )}
        {protein && (
          <p className="card-text">
            <b>Protein: </b> {protein}
          </p>
        )}
        {fat && (
          <p className="card-text">
            <b>Fat: </b> {fat}
          </p>
        )}
        {saturatedFat && (
          <p className="card-text">
            <b>SaturatedFat: </b> {saturatedFat}
          </p>
        )}
        {carbohydrate && (
          <p className="card-text">
            <b>Carbohydrate: </b> {carbohydrate}
          </p>
        )}
        {sugars && (
          <p className="card-text">
            <b>Sugars: </b> {sugars}
          </p>
        )}
        {dietaryFibre && (
          <p className="card-text">
            <b>Dietary fibre: </b> {dietaryFibre}
          </p>
        )}
        {sodium && (
          <p className="card-text">
            <b>Sodium: </b> {sodium}
          </p>
        )}
        {potassium && (
          <p className="card-text">
            <b>Potassium: </b> {potassium}
          </p>
        )}
        {transFat && (
          <p className="card-text">
            <b>Trans fat: </b> {transFat}
          </p>
        )}
        {polyunsaturatedFat && (
          <p className="card-text">
            <b>Polyunsaturated fat: </b> {polyunsaturatedFat}
          </p>
        )}
        {calcium && (
          <p className="card-text">
            <b>Calcium: </b> {calcium}
          </p>
        )}
        {monounsaturatedFat && (
          <p className="card-text">
            <b>Monounsaturated fat: </b> {monounsaturatedFat}
          </p>
        )}
        {magnesium && (
          <p className="card-text">
            <b>Magnesium: </b> {magnesium}
          </p>
        )}
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default ProductDetail;
