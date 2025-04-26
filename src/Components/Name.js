import product from "../data/product"
import "../styles/global.css"


const Name = () => {
  return <h2 className="product-name">{product.name}</h2>
}

export default Name