import Rating from "../../rating/Rating";

function Restaurant({ title, address, image, description, id }) {
  return (
    <div className="card mb-3 shadow-sm p-3 mb-2">
      <div className="row g-0">
        <div className="col-md-4 shadow-lg p-0">
          <img src={image} className="img-fluid rounded" alt={image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-truncate">
              <b>Description: </b>
              {description}
            </p>
            <p className="card-text">
              <b>Adress:</b> {address}
            </p>
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
