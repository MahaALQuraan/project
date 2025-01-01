import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import './products.css';
function ProductDetails(){
const [product,setProduct]=useState({});
    const api_url='https://fakestoreapi.com/products';
    const params=useParams();
    console.log(params);
    useEffect(()=>{
        fetch(`${api_url}/${params.productId}`).then((res)=>res.json()).then((product)=>setProduct(product))

        
    },[]);
return(<>
 
        <h1>Product Details - {params.productId}</h1>
        <br/>
        <h3>{product.title} </h3>
        <p>{product.description}</p>
         <img className="img1" src={product.image} alt={product.title} />

   
    <br /> 
   

    </>)
        

}

export default ProductDetails;