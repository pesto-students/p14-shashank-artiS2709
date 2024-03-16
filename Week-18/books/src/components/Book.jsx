import React from 'react'
function Book(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <p>Author:{props.author}</p>
        <p>Year: {props.year}</p>
    </div>

  )
}

export default Book