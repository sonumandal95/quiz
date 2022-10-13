import React from 'react'

const Select = (props, route) => {
  
    return (
      <div>
        <h1>This is select page</h1>
        <p>{JSON.stringify(props)}</p>
        <p>{JSON.stringify(route)}</p>
        </div>
      )
};

export default Select;
