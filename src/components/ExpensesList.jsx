import { FaTrash } from "react-icons/fa";

const ExpensesList = ({ items, deleteGrocery }) => {

  const getTotal = () => {


    return items.reduce((acc, curr) => acc + curr.price, 0)
  }

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

          items.map((item, i) => <tr key={item.id}>

            <td>{i + 1}</td>
            <td>{item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>{item.category.toUpperCase()}</td>
            <td><FaTrash onClick={() => deleteGrocery(item.id)} color="red" cursor="pointer" size={30} /></td>
          </tr>)
        }

        <tr>
          <td className="total">Total: ${getTotal().toFixed(2)}</td>
        </tr>

      </tbody>
    </table>
  )
}

export default ExpensesList