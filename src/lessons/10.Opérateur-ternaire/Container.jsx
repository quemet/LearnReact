import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false);

  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <label htmlFor="consent">Acceptez vous ?</label>
        <input onClick={() => setValidation(!validation)} type="checkbox"/>
        <p style={{color: `${validation ? "green" : "red" }`}}>{validation ? "Bien vu" : "Biene vue"}</p>
      </form>
    </div>
  )
}
