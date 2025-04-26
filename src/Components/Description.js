import product from "../data/product"
import "../styles/global.css"

const Description = () => {
  return <p className="product-description">{product.description}</p>
}

export default Description