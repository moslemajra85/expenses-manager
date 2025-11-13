import { useState } from "react"
import AddForm from "./components/AddForm"
import ExpensesList from "./components/ExpensesList"
import FilterExpense from "./components/FilterExpense"

const App = () => {

  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all')


  const addGrocery = (grocery) => {
    setItems([...items, grocery])
  }

  const deleteGrocery = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const getFilter = (filter) => {

    setFilter(filter)
  }


  const filteredItems = items.filter(item => {
    if (filter === "all") return true;

    else if (filter === 'groceries') return item.category === filter;
    else if (filter === 'entertainment') return item.category === filter;
    else if (filter === 'tools') return item.category === filter

  })


  return (
    <div>
      <AddForm addGrocery={addGrocery} />

      <FilterExpense getFilter={getFilter} />

      {
        items.length === 0 ? <p className="text">No Item Yet</p> : <ExpensesList deleteGrocery={deleteGrocery} items={filteredItems} />
      }

    </div>
  )
}

export default App