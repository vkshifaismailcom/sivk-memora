function ProductCard({product}){
    return(
        <div>
            <h2>{product.name}</h2>
            <h2>{product.price}</h2>
            <h2>{product.discription}</h2>
        </div>
    )
}
export default ProductCard;