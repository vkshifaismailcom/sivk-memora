import {useParams} from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
function ProductDetails() {
    const {id}=useParams();
    const{data: product}=useQuery({
        queryKey:["products",id],
        queryFn:()=>fetch(`http://localhost:3000/products/${id}`)
        .then((res)=>res.json())
    })
    if(!product){return <p>loading....</p>}
    return(
        <div>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.description}</h2>
            <h2>{product.category}</h2>
            <h2>{product.stock}</h2>
            <button>Add to Cart</button>
        </div>
    )
}
export default ProductDetails;