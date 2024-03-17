import fuji from "./assets/fuji.jpg";
import triangle from "./assets/triangle.svg"

export default function Container() {

  return (
    <div>
      <h1>Utiliser des images</h1>

      <p>Image jpeg/png/webp/etc</p>
      <img src={fuji} alt="Mont Fuji"/>

      <p>Utiliser les images du dossier public</p>
      <img src="/assets/forest-1.jpg" alt="Image d'une forêt"/>

      <p>SVGs</p>
      <img src={triangle} alt="Un triangle"/>
    </div>
  )
}
