// Méthode 1
/*export default function Container() {

  const isLogged = true;

  if(isLogged) {
    return <div>
      <h1>Rendu conditionnel</h1>
      <p>Vous êtes connecté</p>
    </div>
  } else {
    return <div>
      <h1>Rendu conditionnel</h1>
      <p>Vous n'êtes pas connecté</p>
    </div>
  }
}*/

// Méthode 2
export default function Container() {

  const isLogged = true;

  let content;

  isLogged ? content = "Vous êtes connecté" : content = "Vous n'êtes pas connecté"
  
  return (
    <div>
      <h1>Rendu conditionnel</h1>
      <p>{content}</p>
    </div>
  );
}