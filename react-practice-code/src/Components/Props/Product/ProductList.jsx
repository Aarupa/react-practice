
import ProductCard from "./ProductCard";
// function ProductList(){
//     return(
//         <>
//             <ProductCard name="chair"/>
//             <ProductCard description="chair"/>
//             <ProductCard price="1600rs"/>
//         </>
//     );
// }


const ProductList = () =>{
    const products=[
        {name:'chair',description:'description of chair', price: 29.99},
        {name:'table',description:'description of table', price: 50.99},
        {name:'board',description:'description of board', price: 90.99},
    ]   

   return(
    <div>
        {products.map((product,index)=>(
            <ProductCard key={index} product={product}/>
        ))}
    </div>
   )
}
export default ProductList;