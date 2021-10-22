function Rating() {
  const stars = [1, 2, 3, 4, 5];

  function random() {
    return Math.floor(Math.random() * (5 - 1));
  }

  const starRand = random()

  return (
    <div className="container">
      {stars.map((star) => (
        <i
          style={{color: star <= starRand ? "#ffd700" : "#8a9597"}}
          className="fa fa-star me-1 shadow-sm p-3 mb-2 "
          aria-hidden="true"
        ></i>
      ))}
    </div>
  );
}

export default Rating;
