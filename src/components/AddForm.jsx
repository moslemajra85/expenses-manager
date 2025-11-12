import { useState } from "react"
const AddForm = ({ addGrocery }) => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')



    const handleSubmit = (event) => {

        event.preventDefault()

        const grocery = {

            id: Date.now(),
            name,
            price,
            category
        }

        addGrocery(grocery)
    }

    return (

        <div className="form-container">

            <h1 className='title'>Add Groceries</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Name:</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter Name' />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input onChange={(e) => setPrice(+e.target.value)} value={price} type="number" placeholder='Enter Price' />
                </div>

                <div className='form-group'>

                    <label> Category</label>

                    <select onChange={(e) => setCategory(e.target.value)} value={category} className='form-control' placeholder="Select Category">

                        <option value=""></option>
                        <option value="groceries">Groceries</option>
                        <option value="tools">Tools</option>
                        <option value="entertainment">Entertainment</option>
                    </select>

                </div>

                <button className='btn btn-save' type="submit">Save</button>


            </form>
        </div>
    )
}

export default AddForm