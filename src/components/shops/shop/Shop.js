function Shop({ title, address, image, description, id }) {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={image} className="img-fluid rounded-start" alt={image} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text text-truncate">
              <b>Description: </b>
              {description.trim()}
            </p>
            <p className="card-text">
              <b>Adress:</b> {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
