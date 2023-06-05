
import React from 'react'


export const Dropfunction = ({setunit}) => {

    const handlechange = (e) =>{
      setunit(e.target.value)

    }

  return (

    <>
      <div>
        <select className ="form-select" aria-label="Default select example" onClick={handlechange}>
          <option selected disabled>Input unit</option>
          <option value="celsius" >Celsius</option>
          <option value="Fahrenheit" >Fahrenheit</option>
          <option value="Kelvin" >Kelvin</option>
        </select>
      </div>

    </>

  )
}


