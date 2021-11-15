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
    <div className="btn-group dropstart col-1" style={{ opacity:"0.8",color: "#37265F" }}>
      <button
        type="button"
        className="border btn dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{
          backgroundColor: "#dfd3b9",
          color: "#37265F",
        }}
      >
        Filter
      </button>
      <ul
        className="dropdown-menu shadow-sm p-0"
        style={{ backgroundColor: "transparent" }}
      >
        {tags.map((tag) => (
          <li
            key={tag}
            style={{
              backgroundColor: "transparent",
              border: "1px solid #35537e",
              borderRadius: "4px",
            }}
          >
            {" "}
            <button
              onClick={() => {
                props.onFilter(tag);
              }}
              type="button"
              className="btn col-12"
              style={{ backgroundColor: "#fff9e9", color: "#37265F" }}
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
