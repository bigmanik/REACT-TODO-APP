import { useState} from "react"
import  "./style.css"



export default function App() {
  const[newItem, setNewItem] = useState("")
  const[todos, setTodos] = useState([])

  function handleSumbit(e){
    e.preventDefault()

    setTodos([...todos, {}])
  }
  return ( 
  <>
  <form onSubmit={handleSumbit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"> New Item</label>
      <input 
       value={newItem}
      onChange={e=>setNewItem( e.target.value)}
      type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">TODO</h1>
  <ul className="list">
    <li><label>
      <input type="checkbox" id="" />
      Item 1
      </label>
      <button className=" btn btn-danger"> Delete</button>
      </li>
      <li><label>
      <input type="checkbox" id="" />
      Item 2
      </label>
      <button className=" btn btn-danger"> Delete</button>
      </li>
    
  </ul>
  </> 
  )
}