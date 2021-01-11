import React from 'react'
import './Feature.css'

function Feature() {
    document.title="features page"
    return (
        <div className="my-features"> 
        
        <div className="hero">
          <div className="highway"></div>
          <div className="city"></div>
          
          <div className="car">
              <img src="../../image/car.png" alt="carr"/>
          </div>

          <div className="wheel">
              <img src="../../image/wheel.png" className="back-wheel" alt="backwheel"/>
              <img src="../../image/wheel.png" className="front-wheel" alt="frontwheel"/>

          </div>
        </div>    
                    
            <img src='/images/feature.webp' className="ccc9" alt="feature"></img>
                  <div className="feature-info">
                     <div className="feature1">

                        <h1 className="tech">TSI Technology</h1>
                    
                        <p className="para1">Power meets efficiency--   An engine may be powerful, an engine may be efficient, but a perfect combination of both is surely a rare find. And that is exactly what our TSI engine has to offer you.</p>

                        <p className="para2">When you drive a Volkswagen with a TSI engine you don't have to choose between performance and economy, 
                        making it an engine every other engine aspires to be.</p>

                        <p className="para3">   TSI is Volkswagen’s pioneering technology for petrol engines. 
                        The result of this innovative technology is power and torque packed high-tech units with 
                        low consumption.</p>

                        <p> TSI engines employs combination of three advanced technologies namely, 
                        Stratified Direct Fuel Injection (FSI), downsizing concept and the turbocharging, to develop higher 
                        performance than engines with larger capacity.</p>
                </div>
            
          
                <h1 className="perfo">Performance</h1>
                  <p className="perfo_content">Now compliant with BS6, the modern engine technology in Volkswagen models
                      is characterised by economy, high torque and power. 
                         It is crafted for you who loves driving and drives a lot, but still want to keep your consumption down.</p>
                 <h1 className="comfort">Comfort</h1>
                    <p className="comfort_content">Make yourself comfortable in your new Volkswagen. Its extensive basic equipment,
                         the uncomplicated handling and many convenient extras ensure that you can enjoy every day drives.</p>
                
                <h1 className='saftey'>Prevention and Safty</h1>
                    <p className='saftey_content'>All design and engineering measures which exist to protect
                        r occupants from external impacts and to minimize the
                         risk of injuries in the event of an accident are passive 
                         safety systems. The term also refers to what happens in 
                          event of a collision of other road users (partner protection).
                           Besides the seat belt system, the most important passive safety features in our cars include the airbags, the "deformation-resistant" occupant cell and the front/rear deformation zones. Along with the active safety systems, these features provide a substantial amount of protection for
                         passengers by dissipating the impact energy.</p>
                      
             </div>
        </div>
        

    )
}

export default Feature