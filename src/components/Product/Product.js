import React,  {useState, useEffect} from 'react'
import { useParams, } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton';
import {NavLink} from 'react-router-dom'

export default function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        }
        getProduct();
    }, [id]);

    const Loading = () => {
        return (
        <>
            <div class=" col-md-6 ">
                    <Skeleton height={400}/>
            </div>
            <div class=" col-md-3 ">
                <Skeleton height={300} width={300}/>
                <Skeleton height={75}/>
                <Skeleton height={25} width={150}/>
                <Skeleton height={50} />
                <Skeleton height={150}/>

            </div>
        </>
        )
           
    }
    const ShowProduct = () => {
        return(
            <>
            <div class="col-md-6">
                <img src={product.image} alt={product.title} height = "700px" width="400px"/>
            </div>
            <div class="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                
                </h4>
                <h1 className='display-5 fw-bolder '>
                    {product.title}
                </h1>
                <p className='lead fw-bolder'>
                    Rating: {product.rating && product.rating.rate}
                    <i className='fa fa-star '></i>
                </p>
                <p className='lead display-5 fw-bolder my-4 '>
                    ${product.price}
                </p>
                <p className='lead'>
                {product.description}
                </p>
                <button className="btn btn-outline-info px-4 py-2">Add to Cart</button>
                <NavLink className="btn btn-outline-info ms-2 px-3 py-2 " to= '/cart'>Go to Cart</NavLink>

            </div>
            </>
        )
        }

  return (
    <div>   
        <div class="container py-5">
            <div class="row py-4">
            {loading ? <Loading /> : <ShowProduct />}
            </div>
        </div>
    </div>
  )
}
