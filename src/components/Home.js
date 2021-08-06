//import logo from './../logo.svg';
//import logo1 from './../images/16.png';
//import './../App.css';
import React from 'react'; 
import axios from 'axios';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';


class Home extends React.Component {
	constructor(props) {
		super(props)
		  this.state = {
			data: []
		   }
		 }
	
	componentDidMount(){
	  axios.get('http://localhost/enest/fetch_product.php').then(res => 
		{
		  this.setState({data: res.data});
		})
		.catch(errors=>{
            console.log(errors)
        }) 
			
	}
	render(){
  return (
    <div className="App">
      {/* start header */}
      <div className="main-div">
		<Header />
		<div className="main-categorious">
			<div className="footer">	
				<div className="main-img">
					<img src={require('./../images/16.png').default} />
				</div>
				<LeftSide/>	
				<div className="contact">
					<div className="contact-us">
						<p>FEATURED PRODUCTS</p>
					</div>
					<div className="Camera-info">


					{this.state.data.map((result) => {
                      return (
							<div className="samsung-cam">
								<div className="cam-info">
									{/*<img src={require('./../images/sam.png').default} />*/}
									
									<img src={`/images/${result.productimage}`} alt="no img" />
									
									<div className="sam-prc">
										<span>{result.productname}</span>
										<p>{result.productprice}</p>
									</div>
									<hr className="hr2" />
									<div className="cart-btn">
										<i className="fa fa-plus-circle iconn" aria-hidden="true"></i>
									{/* <i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
										<i className="fa fa-plus" aria-hidden="true"></i>
										<i className="fa fa-cart-plus" aria-hidden="true"></i>
										<input type="submit" name="" value="Add to cart" />
									</div>
								</div>
					      </div>
						)
				    })}	
							
						
					
					</div>
				</div>
				<Footer/>
			</div>
		</div>
	</div>
      {/* end header */}
    </div>
  );
 }
}

export default Home;
