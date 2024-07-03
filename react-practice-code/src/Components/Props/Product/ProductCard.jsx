// function ProductCard(product){
//     return(
//     <>
//         <p>{product.name}</p>
//         <p>{product.description}</p>
//         <p>{product.price}</p>
//     </>
//     );
// }

// export default ProductCard;


const ProductCard = ({product})=>{
    return(
        <div>
            <h2>Name: {product.name}</h2>
            <p>Description: {product.description}</p>
            <p>price: ${product.price}</p>
        </div>
    )
}

export default ProductCard;