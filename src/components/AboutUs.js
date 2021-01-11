import React from 'react'
import './AboutUs.css'

function AboutUs() {
    document.title="about us page"
    return (
        <div className="about_page">
            <img src="/images/vols.jpg" className="vols" alt="vols"></img>
            <div className="about">
            <h1>About Us</h1>
            <p>The company was originally operated by the German Labour Front (Deutsche Arbeitsfront) a Nazi organization. The Austrian automotive engineer Ferdinand 
                 who was responsible for the original design of the car, was hired by the 
                 German Labour Front in 1934, and ground was broken for a new factory in the
                  state of Lower Saxony in 1938. The outbreak of World War II in 1939 occurred 
                  before mass production could begin, and the factory was repurposed to produce 
                  military equipment and vehicles. Volkwagen’s military involvement made its 
                   a target for Allied bombers, and by the end of the war the factory was in ruins. 
                   It was rebuilt under British supervision, and mass production of the Volkswagen began in 1946. Control of the company was transferred in 1949 to the West German government and the state of Lower Saxony. By that time, more than half of the passenger cars produced in the country were Volkswagens.</p>
            <p>Volkswagen production expanded rapidly in the 1950s. The company introduced the Transporter 
                van in 1950 and the Karmann Ghia coupe in 1955. Sales abroad were generally strong in most 
                countries of export, but, because of the car’s small size, unusual rounded appearance, and 
                historical connection to Nazi Germany, sales in the United States were initially sluggish. 
                The car began to gain acceptance there as the 1950s progressed, however, and Volkswagen of 
                America was established in 1955. The American advertising agency Doyle Dane Bernbach was hired 
                to represent the brand in 1959, and the result was a landmark advertising campaign that helped 
                to popularize the car as the “Beetle” and promoted its size and unconventional design as an 
                advantage to the consumer. The campaign was very successful, and the Beetle was for many years
                 the most-popular imported automobile in the United States. Although Volkswagen made many detail 
                 changes to the Beetle, the basic rear-engine design and rounded shape remained the same. The 
                 company developed other rear-engine models with more-modern styling and improved engineering, 
                 but none were as successful as the Beetle.
                </p>
            
            <h1 >Enery and Environment Policy</h1>
            <p>We at Volkswagen India Pvt. Ltd. are relentlessly striving to develop an organization which delivers outstanding 
                quality products and customer services by employing and developing motivated, well qualified and trained 
                individuals, whose primary focus is to achieve total customer satisfaction and to delight our customers.

            We commit to undertake energy management within our organization to ensure improvement in energy 
            performance by regular energy reviews, effective monitoring, measurement & control and purchasing of energy
             efficient products, ices and design by providing necessary resources & information.

            We ensure that the implementation, documentation and control of the Energy & Environmental Policy are, at all times, aligned with the company vision, objectives, targets and defined requirements of the Management.</p>
            <div className="Aboutus_footer">
            <p>To know more about us <a href='https://www.volkswagen.co.in/en/brand-and-experiences/volkswagen-brand.html' 
                    target="_blank" rel="noopener noreferrer" >
                click here</a></p>
                </div>
        </div>
        </div>
    )
}

export default AboutUs