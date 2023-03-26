import React from 'react';
import { useSelector } from 'react-redux';

export default function Cart() {
  const state = useSelector(state => state.handleCart);
    const handleAdd = (product) => {
           return product.qty= product.qty +1
        
    }

    const handleRemove = (product) => {
        console.log('hi');
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 py-5 ">
                <hr></hr>
                {state.map((product) => (
                    <div key={product.id} className ="d-flex justify-content-center align-items-center py-5">
                        <div class="col-md-4">
                            <img src={product.image} alt={product.title} height = "200px" width="180px"/>
                        </div>
                        <div class="col-md-4">
                            <h3>
                                {product.title}
                            </h3>
                            <p className='lead fw-bold my-4 '>
                                    {product.qty} X ${product.price} = $
                                    {product.qty * product.price}
                            </p>
                        <button className="btn btn-outline-info me-4" onClick = {() => {handleRemove(product)}}><i className='fa fa-minus'></i></button>
                        <button className="btn btn-outline-info" onClick = {() => {handleAdd(product)}}><i className='fa fa-plus'></i></button>
                        </div>
                    
                        
            </div>
                
                ))}
                <hr></hr>
                </div>
            </div>
        </div>
    </div>
  )
}
