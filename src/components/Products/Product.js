import React, { useEffect, useState } from 'react';
import {useParams, useRouteMatch, useLocation} from 'react-router-dom';


const Product = (props) => { 
    const {id} = useParams();
    const item = useLocation();
    const {url,path} = useRouteMatch();
    const [ProductItem, setProductItem] = useState([]);
    useEffect(() => {
            fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((result)=> setProductItem(result));
              
        },[]);
    return (
        <div> 
            {/* {console.log(url, path)} */}
            <h1>
                Product Detials: {ProductItem.id}            
            </h1>
            <div >
                <img src={ProductItem.image} alt="" height="200" />
            </div>
            <br />
            <div className="offset-3 col-md-6">
                <b>Product Name: </b>{ProductItem.title}
            </div>
            <div className="offset-3 col-md-6">
                <b>Price:</b> ${ProductItem.price}
            </div>
            <div className="offset-3 col-md-6">
                <b>Description : </b>{ProductItem.description}
            </div>
            <div className="offset-3 col-md-6">
                <b>category: </b>{ProductItem.category}
            </div>
            <div className="col-md-4">          
                <button><a href="/Products"> Return To Products Page</a></button>
            </div>
        </div>
    )
}

export default Product
