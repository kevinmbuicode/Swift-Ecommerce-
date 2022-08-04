import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/`);
        setProduct( await response.json());
        setLoading(false);
      }
      getProduct()
    }, [])
    
    //Loading style while fetching product
    const Loading = () => {
        return(
            <>
                Loading....
            </>
        )
    }

    //Show Product when fetch has completed
    const ShowProduct = () => {
        return(
            <>
                
            </>
        )
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product;