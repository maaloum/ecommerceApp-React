import React from 'react'
import {useState, useEffect} from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState(products);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setFilter(data);
            setLoading(false);
        }   
            getProducts();

    }, []);

    const Loading = () => {
        return (
        <div>
            <div class=" col-md-3 ">
                    <Skeleton height={350}/>
            </div>
            <div class=" col-md-3 ">
                <Skeleton height={350}/>
            </div>
            <div class=" col-md-3 ">
                <Skeleton height={350}/>
            </div>
            <div class=" col-md-3 ">
                <Skeleton height={350}/>
            </div>
        </div>
        )
           
    }

    const filterProduct = (category) => {
        const newFilter = products.filter((product) => product.category === category);
        setFilter(newFilter);
    }
    const ShowProducts = () => {
        return (
            <>
                    <div class ="buttons d-flex justify-content-center ">
                        <button class="btn btn-outline-info me-2" onClick={() => setFilter(products)}>
                        All 
                        </button>
                        <button class="btn btn-outline-info me-2" onClick={() => filterProduct("men's clothing")}>
                            Men's Clothing
                        </button>
                        <button class="btn btn-outline-info me-2" onClick={() => filterProduct("women's clothing")}>
                            Women's Clothing
                        </button>
                        <button class="btn btn-outline-info me-2" onClick={() => filterProduct("jewelery")}>
                            Jewelery Clothing
                        </button>
                        <button class="btn btn-outline-info me-2" onClick={() => filterProduct("electronics")}>
                            Electronics
                        </button>
                    </div>

                    {
                        filter.map((product) => {
                            return(
                                <>
                                <div class="col-md-3 col-sm-6 mb-4 mt-5">
                                    <div class="card h-100 text-center p-4" key={product.id}>
                                        <img class="card-img-top" src={product.image} alt={product.title} height = "250px"/>
                                        <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                        <p class="card-text lead fw-bolder"> ${product.price}</p> 
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-info">Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>

                                
                                </>
                            )
                    })
                }
            </>
        )

            
    }

  return (
    <>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 class = "display-6 fw-bolder text-center"> Latest Products
                    </h1>
                    <hr/>
                </div>
                <div class= "row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    </>
  )
}
