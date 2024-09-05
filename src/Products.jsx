import { useEffect, useState } from "react";
import style from './products.module.css'

export default function Products() {
    const [products,setProducts]=useState([]);
    const getProducts=async()=>{
const response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
const data= await response.json();
setProducts(data.recipes);
    }
    useEffect(()=>{
        getProducts();
    },[])

  return (
    <>
    <div className="container">
    <div className="row g-2 p-2 mb-2">
    {
        

        products.map(product=>
            <div className="col-lg-3 p-1">
            <div className="card text-center">
<h2 className={`${style.fontsize}`}>{product.title.split(' ').splice(0,3).join(' ')}</h2>
<img src={product.image_url}/>
            </div>
            </div>
           
        )
  
       
   
    }
    </div>
    </div>
   
     </>
    
  )
}
