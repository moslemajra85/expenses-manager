import React, { useState } from 'react'

const FilterExpense = ({ getFilter }) => {

    const [selected, setSelected] = useState('')
    return (
        <div>

            <h2>Filter By:</h2>
            <select value={selected} onChange={(e) => getFilter(e.target.value)} className='form-control'>
                <option value=""></option>
                <option value="all">All</option>
                <option value="groceries">
                    Groceries

                </option>   <option value="entertainment">
                    Entertainment

                </option>   <option value="tools">
                    Tools
                </option>
            </select>
        </div>
    )
}

export default FilterExpense