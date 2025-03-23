import './ProductCard.css';
interface Product{
    title: string;
    description: string;
    category: string;
    image: string;
}
const ProductCard = ({product}: {product: Product}) => {
  return (
    <div className="card-container">
       <div className="card-image">
            <img src={product.image} alt="Product" className="product-image"/>
        </div>
        <div className="card-content">
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <div className="product-category">{product.category}</div>
        </div>
    </div>
  )
}

export default ProductCard