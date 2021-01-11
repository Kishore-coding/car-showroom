import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      userName:'',
      userEmail:''
    }
  }

  changeNameHandler=(e)=>{
    this.setState({
      userName:e.target.value
    })
  }

  changeEmailHandler=(e)=>{
    this.setState({
      userEmail:e.target.value
    })
  }
  submitHandler=(event)=>{
    if(this.state.userName!=="" && this.state.userEmail!==""){
        
       alert(`Welcome ${this.state.userName}, we will send you the offer details to your email id ${this.state.userEmail} `)
    }
    else if(this.state.userName==='' && this.state.userEmail===''){
        alert(`Enter your name and email`)
    }
    else if(this.state.userName==='' || this.state.userEmail===''){
      alert(`Please enter both name and email`)
    } 
    else{
      alert(`something wrong`)
    }    
    event.preventDefault();
  }
 
  
    
  render() {
    document.title="homepage"   

    return (
        <div>
            <img className="mycar" src="/images/benz.jpg" alt="NEW BRAND CARS"/>
            <div className="image-info">
              <h1 className='image_text'>OUR NEXT MODEL BT-144GD</h1>
              <p className="image_content">Volkswagen this model <br></br>
                  goona lauch by 2021 and bookings from feb-28
              </p>
            </div>
          <h1 className="welcome">Welcome to the Volkswagen international website</h1>
          <p className="mypara" >Exclusive reports and current firms:experience a  broad range of topics  from the fascinating world of new
             Volkswagen.To find out about offers in your location,please go the local Volkswagen website</p>
    
            <div className="connected">
                <h2>Stay forever connected with Volkswagen</h2>
                <img src="/images/connect.webp" alt="connect" />
                <p>My Volkswagen Connect lets you stay connected to your Volkswagen even when you’re not around it.  
                It’s an advanced solution that records, analyses and provides you with all the information you need 
                to know about your Volkswagen to deliver an enhanced driving experience.</p>
            </div>

            <h2 className='offers'>Enter your details to know your offers</h2>

      <form >
         <div className="user_info">
            <div className='user_name'>
            <input type='text' value={this.state.userName} onChange={this.changeNameHandler} className='name' placeholder="Enter your name" />
            </div>
            <div className='user_email'>
            <input type='text' value={this.state.userEmail} onChange={this.changeEmailHandler} className="email" placeholder='Enter your Email' /><br></br>
            </div>
         </div>
            <div className="submit_button">
              <button type='button' className='butt' onClick={this.submitHandler} >Submit</button>
            </div>
      </form>
      <div className="footer">
       <h3 className="footer_text">Disclaimer by Volkswagen </h3>
            <p className='footer_para'> All prices listed are Manufacturer’s 'On the road' Recommended Retail Price. Volkswagen may change RRPs at any time (this includes where there are government changes in regulation and/or legislation). There may be a delay to any RRP displaying correctly on our materials. Always obtain prices from your chosen retailer. Images shown do not reflect the stated entry level prices.
             Terms and conditions apply.<br></br><br></br> Car specifications and features are subject to change without prior notice. Actual appearance/colour shade may slightly differ. Image of left hand drive car is provided for representation purpose only. Volkswagen reserves the right to alter the details of specifications and equipment without any notice. Images shown are for representation purposes only. 
             For further details, please visit our authorised dealership.</p>
        </div>
        <hr className='line'></hr>
        <h1 className='number'>Toll free Number -11889900000</h1>
        </div>
      
    )
}
}
 
export default Home