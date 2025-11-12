import { FaTrash } from "react-icons/fa";

const ExpensesList = ({ items, deleteGrocery }) => {
  return (
    <table>

      <thead>

        <th>#</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Action</th>

      </thead>

      <tbody>

        {

          items.map(item => <tr key={item.id}>

            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.category.toUpperCase()}</td>
            <td><FaTrash onClick={() => deleteGrocery(item.id)} color="red" cursor="pointer" size={30} /></td>
          </tr>)
        }

      </tbody>
    </table>
  )
}

export default ExpensesList