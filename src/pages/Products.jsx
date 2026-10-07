import {useQuery} from "@tanstack/react-query";
import { useEffect } from "react";
import { setProducts } from "../redux/slices/productSlice";
import { useDispatch,useSelector } from "react-redux";
import ProductCard from "../components/PoductCard";

function Products(){
    const dispatch=useDispatch();
    const products=useSelector((state)=>state.product);
    const{data=[]}=useQuery({
        queryKey:["products"],
        queryFn:()=>fetch("http://localhost:3000/products")
        .then((res)=>res.json())
    })
useEffect(()=>{
    if(data.length>0){dispatch(setProducts(data));}
},[data,dispatch])
    return(
        <div>
            <h1>PRODUCTS</h1>
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}
export default Products;