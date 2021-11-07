function RecipeDetails(steps) {
  
  function stepByStep(elements) {
    for (let i = 0; i <= elements.length; i++) {
      console.log(elements[i]);
    }
  }

  console.log(stepByStep(steps))
  console.log(steps)

  return (
    <div>
      {/* Prueba Modal */}
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#recipeDetails"
      >
        Detail
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="recipeDetails"
        tabIndex="-1"
        aria-labelledby="recipeDetailsLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="recipeDetailsLabel">
                Name
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
