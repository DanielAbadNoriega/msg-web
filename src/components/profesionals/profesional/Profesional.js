function Profesional({ name, email, phone, avatar, address, company }) {
  //const { street, suite, city, zipcode } = address;
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={avatar} className="img-fluid rounded-start" alt={avatar} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title">{company.name}</h3>
            <p className="card-text text-truncate">
              <b>Description: </b>
              {company.catchPhrase.trim()}
            </p>            
            <p className="card-text">
              <b>About us: </b>
              <small class="text-muted">{company.bs}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profesional;
