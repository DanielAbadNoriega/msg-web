import Rating from "../../rating/Rating";

function Recipe({ name, image }) {
  return (
    <div className="card col-3 me-4 shadow p-3 mb-5">
      <img src={image} className="card-img-top rounded shadow-lg p-0" alt={image} />
      <div className="card-body">
        <p className="card-text"><h5>Name: </h5>{name}</p>
      </div>
      <Rating />
    </div>
  );
}

export default Recipe;
