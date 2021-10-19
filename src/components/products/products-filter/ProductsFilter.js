function ProductsFilter(props) {
  const tags = [
    "grain",
    "carb",
    "supplement",
    "snack",
    "legume",
    "nut",
    "seed",
    "fruit",
    "vegetable",
    "superfood",
  ];
  return (
      <div className="btn-group dropstart col-1">
        <button
          type="button"
          className="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter
        </button>
        <ul className="dropdown-menu">
          {tags.map((tag) => (
            <li>
              {" "}
              <button
                onClick={() => {
                  props.onFilter(tag);
                }}
                type="button"
                className="btn btn-outline-secondary col-12"
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default ProductsFilter;
