import Rating from "../../rating/Rating";
import RecipeDetails from "../recipe-details/RecipeDetails";
import "./Recipe.css";

function Recipe({ name, image, id, steps, onDelete, ...recipe }) {
  return (
    <div className=" card me-4 shadow p-3 mb-5 col-12">
      <img
        src={image}
        className="card-img-top rounded shadow-lg p-0  h-100 w-100"
        alt={image}
      />
      <div className="card-body">
        <p className="card-text">
          <b>Name: </b>
          {name}
        </p>
      </div>
      <Rating />
      {/* Prueba Modal */}
      <RecipeDetails {...steps} />
      {/* Delete */}
      <i
        style={{ color: "red" }}
        className="fa fa-trash-o fa-fw mt-2 me-2"
        aria-hidden="true"
        role="button"
        onClick={() => onDelete(id)}
      ></i>{" "}
      {/* Modificar para que solo sea posible si ADMIN */}
    </div>
  );
}

export default Recipe;
