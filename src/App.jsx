import './style.css'
import  {useState} from 'react'


  export default function App(){
    const[newItem, setNewItem] = useState("Shubham Bane ")
    // newItem = "dsdgs"
    return (
      // <> This is Fragment that work div that hold all element
      <> 
      <form className ="new-item-form">
        <div className = "form-row">
          <label htmlFor="item">New Item</label>
          <input value= {newItem} 
          onChange= { e => setNewItem(e.target.value)} 
          type="text" id="item"></input>

        </div>
        <button className ="btn">Add</button>
      </form>
      <h1>ToDO List</h1>
      <ul className ="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className ="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
          <button className ="btn btn-danger">Delete</button>
        </li>
      </ul>
      </>
    )
  }



