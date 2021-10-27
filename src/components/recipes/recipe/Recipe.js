import Rating from "../../rating/Rating";
import RecipeModal from "../recipes-modal/RecipeModal";
import "./Recipe.css";

function Recipe({ name, image, id, onDelete, ingredients }) {
  return (
    <div>
      <div className=" card me-4 shadow p-3 mb-5 col-7">
        <img
          src={image}
          className="card-img-top rounded shadow-lg p-0 h-100 w-100"
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
        <RecipeModal ingredients= {ingredients}/>
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
    </div>
  );
}

export default Recipe;
