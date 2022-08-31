import { Box } from '@mui/material';
import React, { useState,useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { itemAdded } from '../features/Cart/CartSlice';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart)

    const addtoCart= (product)=>{
        const{name, price,image}=product
        
    dispatch((itemAdded({name,price,image})))  
      }
    
    useEffect(() => {
      const getProduct = async () => {
        setLoading(true)
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        setProduct( await response.json());
        setLoading(false);
    }
    getProduct()
}, [id])

    
    //Loading style while fetching product
    const Loading = () => {
        return(
            <>
                <div className='col-md-6'>
                    <Skeleton height={400}/>
                </div>
                <div className='col-md-6' style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={75} width={100}/>
                    <Skeleton height={75}/>
                    <Skeleton height={75}/>
                    <Skeleton height={75} width={100}/>
                    <Skeleton height={75} width={100} style={{marginLeft:6}}/>
                </div>
            </>
        )
    }

    //Show Product when fetch has completed
    const ShowProduct = () => {
        return(
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height='400px' width='350px'/>
                    
                    <Box sx={{ display: "flex", gap: 4, marginTop: 4}}>
                    <img src={product.image} alt={product.title} height='40px' width='50px'/>
                    <img src={product.image} alt={product.title} height='40px' width='50px'/>
                    <img src={product.image} alt={product.title} height='40px' width='50px'/>
                    <img src={product.image} alt={product.title} height='40px' width='50px'/>
                    </Box>
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>
                        {product.category}
                    </h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead'>
                    
                    {/* Check if product.rating is true render the rate*/}
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=> addtoCart(product)}>Add to Cart</button>
                    <Link to='/cart' className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</Link>
                </div>
            </>
        )
    }

  return (
    <div>
        <div className='container py-5'>
            <div className='row py-4'>
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}

export default Product;