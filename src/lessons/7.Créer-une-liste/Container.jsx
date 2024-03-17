export default function Container() {

  const data = [
    {
      id: 1,
      name: "John"
    },
    {
      id: 2,
      name: "Alex"
    },
    {
      id: 3,
      name: "Bob"
    }
  ]

  return (
    <div>
      <h1>Créer une liste d'éléments avec React</h1>
      <ul>
        {
          data.map(user => (
            <li key={user.id}>User: {user.name}</li> 
          ))
        }
      </ul>
    </div>
  )
}