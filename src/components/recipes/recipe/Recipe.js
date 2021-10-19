function Recipe({ name, image }) {
  return(
    <div className="card">
      <img src={image} className="card-img-top" alt={image} />
      <div className="card-body">
        <p className="card-title">{name}</p>
      </div>
    </div>
  )
}

export default Recipe;