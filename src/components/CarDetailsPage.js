import React from 'react'
import "./CarDetails.css"
import {data} from "../data"
import { Link } from 'react-router-dom'

function CarDetailsPage(props) {
    const product=data.products.find(x => x._id===props.match.params.id)
    return (
        <div  className="details-page" style={{paddingTop:"3rem"}} >
            <div className="back">
                <Link to ="/models">Back to Models</Link>
            </div>
             <div className="car-details">
                    <div className="car-details-image">
                        <img src={product.image} alt="car-details"/>
                    </div>
                    <div className="car-info">
                        <h3>{product.brand} {product.model}</h3>
                        <p>Top rated brand for saftey and performance</p>
                        <h3>Price : &#8377; {product.price}</h3>                      
                       
                        
                    </div>
            </div>
            <div className="model-description">
                <h4>About Model:</h4>
                <p1 className="about-model"> {product.description} </p1>
            </div>
            
        </div>
    )
}

export default CarDetailsPage
