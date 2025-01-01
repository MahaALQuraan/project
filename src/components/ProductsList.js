import { useEffect, useState } from "react";
import Product from './Product';

function ProductsList(){

    const [categories,setCategories]=useState([]);
    const[products,setProducts]=useState([]);
const api_url='https://fakestoreapi.com/products';
const getProducts=()=>{
    fetch(api_url).then((res)=>res.json())
    .then((data)=>setProducts(data));
}
const getCategories=()=>{
    fetch(`${api_url}/categories`).then((res)=>res.json()).then((data)=>setCategories(data))
}
useEffect(()=>{
    getProducts();
    getCategories();


},[]);
const getProductInCategory=(catName)=>{
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
            .then(res=>res.json())
            .then(data=>setProducts(data))
}

    return(<>
    
<h1 className="text-align p-3">Our Products</h1> 
<div className="container">
<button onClick={()=>{
    getProducts();
}}  className="btn btn-info m-4">All</button>
{categories.map((cat)=>{
    return(<>
        <button key={cat.id} onClick={()=>{
            getProductInCategory(cat);
        }}  className="btn btn-info m-4">{cat}</button>
        </>)
})}
   <div className="row" >
    {products.map((product)=>{
        return(<>
            <div className="col-lg-3  col-md-4 col-sm-6" key={product.id}>
            <Product product={product} showButton={true} />
            </div>
            </>)
       

    })}
 
 
    </div>
    
    
    </div>
    
    
    </>)



}


export default ProductsList;