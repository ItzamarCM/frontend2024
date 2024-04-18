import ShowItemModal from "./ShowItemModal"

const ListItem = ({task, limit}) => {

return(
<>
  <div className="row m-2">
        <div className="col-6">
          <ShowItemModal />
          <button 
            className="btn btn-link"
            data-bs-target="#showItemModal"
            data-bs-toggle="modal"
            >
            {task}
          </button>
        </div>

        <div className="col-2">
          {limit}
        </div>


        <div className="col">
          <button className="btn btn-sm btn-outline-primary">
              <i class="bi bi-pencil-square"></i>  {/*llama al icono */}
            </button>
          <button className="btn btn-sm btn-danger">
              <i class="bi bi-trash-fill"></i>
            </button>
        </div>
    </div>
</>

)
}
export default ListItem