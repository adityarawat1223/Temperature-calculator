import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropfunction } from "../components/dropdown"
import { BsArrowDown } from "react-icons/bs"
import { Covertdrop } from '../components/convertdrop';
import { Tempcalculator } from '../controllers/calculator';
import { toast } from "react-toastify"


export const Home = () => {
  const [val, setval] = useState("")
  const [unit, setunit] = useState("waiting")
  const [conunit, setconunit] = useState("none")
  const [answer, setanswer] = useState("")
  const [answerunit, setanswerunit] = useState("")
  const pureval = parseInt(val)


  const submit = (event) => {
    event.preventDefault();
    if (val === "") {
      toast.error("Please enter temperature")

    }
    else {


      Tempcalculator({ pureval, conunit, unit, setanswer, setanswerunit })

    }

  }
  return (
    <div className="home">

      <form onSubmit={submit} className='formcss'>
        <div className="inputarea">
          <div className="textarea">
            <label className='labelcss'>Enter Temperature</label>
            <input className='inputcss' type="number" onChange={(e) => setval(e.target.value)} placeholder='0' />
          </div>
          <Dropfunction setunit={setunit}></Dropfunction>
        </div>

        <BsArrowDown size={30} color='white' />
        <Covertdrop setconunit={setconunit}>  </Covertdrop>
        <input className='convertbutton' type="submit" value="Convert" />
        <div className='answer'>{answer === "" ? "Input All values and press Convert to get Answer" : `Temprature is ${Math.round(answer)} ${answerunit}`}</div>
      </form>

    </div>
  )
}
