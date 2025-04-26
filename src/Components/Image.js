import product from "../data/product"
import "../styles/global.css"


const ProductImage = () => {
  return (
    <div className="product-image-container">
      <img src={product.image} alt={product.name} className="product-image" />
    </div>
  )
}

export default ProductImage
