const ShowItemModal = ({task}) =>{

  return (
    <div className="modal fade" id={'showItemModal'+task.id}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <div className="modal-title">
                        {task.task}
                    </div>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        >
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <p>{task.description}</p>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <i className="bi bi-geo-alt-fill"></i>
                            {task.location}
                        </div>
                        <div className="col">
                            <i className="bi bi-clock-fill"></i>
                            {task.limit}
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                <button className="btn btn-sm btn-danger">
                    <i class="bi bi-trash-fill"></i>
                    Delete
                 </button>

                <button className="btn btn-sm btn-primary">
                    <i class="bi bi-pencil-square"></i>  {/*llama al icono */}
                    Edit
                </button>

                    <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        data-bs-dismiss="modal"
                        >
                        <i className="bi bi-x-lg"></i>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ShowItemModal