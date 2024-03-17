export default function Card({id, state, changeState}) {
  return (
    <div>
      <h2>Voici la carte</h2>
      <p>User : {id}</p>
      <p>State : {state}</p>
      <button onClick={() => changeState("Hello")}>Click Me</button>
    </div>
  )
}
