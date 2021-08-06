import React from 'react';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';
import axios from 'axios';
import { Link , NavLink } from 'react-router-dom';

class NewProducts extends React.Component{
	constructor(){
		super()
		this.state = {
			product_detail:[],
			title:''
		}
	}
	componentDidMount() {
	
			axios.post('http://localhost/enest/new_products.php').then(res=>{
				this.setState({product_detail: res.data.mydata});
			}).catch(errors=>{
			  console.log(errors)
			})
		
	}
	render(){
		return (
			<div>
			  {/* start here */}
			  <div className="main-div">
				<Header />
				<div className="main-categorious">
					<div className="footer">
						<LeftSide />
						<div className="contact">
							<div className="contact-us">
								<p>New Products</p>
							</div>
							{/*<div className="product-info">
								<span>Sort by:</span>
								<form>
									<select>
										<option>product name</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
									</select>
								</form>
		                    </div>
							<div className="display-product">
								<span>Displaying 1 to 5(of 6 new product)</span>
								<div className="btnnn">
									<input  className="pre" type="submit" name="" value="Previous" />
									<input className="nxt" type="submit" name="" value="Next" />
								</div>
							</div>*/}

                     {this.state.product_detail.map((result) => {
                       return (
							<div className="dish-info">
								<div className="machine-pic">
									<div className="img">
										{/*<img src={require('./../images/1.jpeg').default} />*/}
										<img src={`/images/${result.productimage}`} alt="no img" />
									</div>
									<div className="stock">
										<p>In Stock: {result.productquantity}</p>
									</div>
								</div>
								<div className="machine-info">
									<div className="date">
										<span> Date Added:2013-06-01  08:05:32</span>
									</div>
									
									<div className="washer">
										<p>{result.productname}</p>
									</div>
									<div className="model-info">
										<span>Model:{result.productname}</span>
										<p>Manufacturer:{result.productname}</p>
									</div>
									<div className="price">
										<span>{result.productprice}</span>
									</div>
									<div className="checkout">
									    <Link to = {`/buy-products/${result.id}`}>
										<input type="button" name="" value="BUY NOW" />
										</Link>
									</div>
								</div>
							</div>
						)
				    })}	
							
							
						</div>
						<Footer/>
					</div>
				</div>
			</div>
			  {/* end here */}
			</div>
		  );

	}
}

export default NewProducts;
