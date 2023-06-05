import React from 'react'



export const Covertdrop = ({ setconunit }) => {
  const handlechange = (e) =>{
    setconunit(e.target.value)

  }
  return (
    <>
     <div>
        <select className="form-select" aria-label="Default select example" onClick={handlechange}>
          <option selected disabled >Convert Into</option>
          <option value="celsius" >Celsius</option>
          <option value="fahrenheit" >Fahrenheit</option>
          <option value="kelvin" >Kelvin</option>
        </select>
      </div>
    </>
  )
}
