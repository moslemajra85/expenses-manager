import { useState } from "react"
import AddForm from "./components/AddForm"
import ExpensesList from "./components/ExpensesList"


const App = () => {

  const [items, setItems] = useState([])


  const addGrocery = (grocery) => {
    setItems([...items, grocery])
  }

  const deleteGrocery = (id) => {
    setItems(items.filter(item => item.id !== id))
  }
  return (
    <div>
      <AddForm addGrocery={addGrocery} />

      {
        items.length === 0 ? <p className="text">No Item Yet</p> : <ExpensesList deleteGrocery={deleteGrocery} items={items} />
      }

    </div>
  )
}

export default App