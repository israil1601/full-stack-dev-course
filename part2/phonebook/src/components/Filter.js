import React from 'react';

const Filter = ({handleFilter, filterSearch}) => {

    return (
        <div>
           filter shown with <input value={filterSearch} onChange={handleFilter} />
        </div>
    )
}

export default Filter;