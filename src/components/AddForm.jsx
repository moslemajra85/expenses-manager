import React from 'react'

const AddForm = () => {
    return (

        <div className="form-container">

            <h1 className='title'>Add Groceries</h1>
            <form>

                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder='Enter Name' />
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input type="number" placeholder='Enter Price' />
                </div>

                <div className='form-group'>

                    <label> Category</label>

                    <select className='form-control' placeholder="Select Category">

                        <option value=""></option>
                        <option value="groceries">Groceries</option>
                        <option value="tools">Tools</option>
                        <option value="entertainmenet">Entertainmenet</option>
                    </select>

                </div>

                <button className='btn btn-save' type="submit">Save</button>


            </form>
        </div>
    )
}

export default AddForm