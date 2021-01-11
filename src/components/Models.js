import React from 'react'
import './Model.css'
import {data} from "../data";
import {Link} from "react-router-dom"

function Models() {
    document.title="car models page"
    return (
        <div className='myModel'>
            
            <img src="/images/model-img.jpg" className="model-car" alt="model_car"></img>
            <img src="/images/buggati.webp" className="pop" alt="model"/>
            <h1 className="booking">Book a Test Drive<br></br>
            Experience the elegant and ingenious Polo PA edition</h1>

            <h1 className="models">Our new models</h1>
            
            <div className="new-models">
                {
                    data.products.map(product=>
                       <div key={product._id} className="model-items">
                            <Link to={"/product/" + product._id}>
                                <img className="model-image" src={product.image} alt="models"/>
                               <hr/>    
                            </Link>
                       </div>
                        )
                }
            </div>
           
            <hr className='line'></hr>
            <h1 className='foto'>Alternatively, book your test drive by contacting us at 18002090909</h1>
        </div>
    )
}

export default Models