const ShowItemModal = () =>{

  return (
    <div className="modal fade" id='showItemModal'>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">
                        Show Item
                    </div>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        >
                    </button>
                </div>
                <div className="modal-body">
                    Select Item Information
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ShowItemModal