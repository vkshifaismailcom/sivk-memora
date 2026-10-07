import {Link} from "react-router-dom";
function ProductCard({product}){
    return(
        <div>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.discription}</h2>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    )
}
export default ProductCard;