import { useState,useEffect } from "react"
import Products from '../api/product.json'
import ProductItem from './ui/productItem.js'

export default function Favorites() {

const [products,setProducts] = useState ([]);

useEffect(()=>{
  setProducts(Products);
},[])

  return (
    <div>
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
        {products.length && products.map((product,index) => <ProductItem key={index} product={product}/> )}
      </div>
    </div>
  )
}
