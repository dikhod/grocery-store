import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard';

const AllProducts = () => {
    const {products, searchQuery, setSearchQuery} = useAppContext();
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(()=>{
      if(searchQuery.length>0){
        setFilterProducts(products.filter(((product)=> product.name.toLowerCase().includes(searchQuery.toLowerCase()))));
      }else{
        setFilterProducts(products);
      }
    },[products, searchQuery]);

  return (
    <div className='mt-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'>
            <h1 className='text-2xl font-medium uppercase'>All Products</h1>
            <div className='w-16 h-0.5 rounded-full bg-primary'></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6 gap-4'>
            {
               filterProducts.filter((product)=>product.inStock).map((product, index)=>(
                <ProductCard key={index} product={product}/>
               ))
            }
        </div>
    </div>
  )
}

export default AllProducts