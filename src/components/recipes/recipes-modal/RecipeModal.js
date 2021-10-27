function RecipeModal({ingredients}) {
  return (
    <div>
      {/* Prueba Modal */}
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#recipeModal"
      >
        Detail
      </button>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="recipeModal"
        tabIndex="-1"
        aria-labelledby="recipeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="recipeModalLabel">
                Ingredients
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              MODAL BODY
            </div>
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

export default RecipeModal;
