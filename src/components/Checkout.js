import React from 'react';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';
import axios from 'axios';
import { Link , NavLink } from 'react-router-dom';

class Checkout extends React.Component{
	constructor(){
		super()
		this.state = {
			 
			abcd:[],
			uid:''
		}
		//this.input1 = React.createRef();
	}
	componentDidMount() {
		const session =localStorage.getItem("uid");
		//alert(session);
		/*this.setState({uid: session});
		alert(this.state.uid);
		const uidd = this.input1.current.value;
		//alert(uidd);*/
		const fd = new FormData();
        fd.append('uidd', session);
			axios.post('http://localhost/enest/checkout.php', fd).then(res=>{
				this.setState({abcd: res.data.mydatas});
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
								<p>Checkout</p>
							</div>
				
							<div className="dish-info">
								<div className="machine-info">
								
									<table>
										<tr>
										    <th>ID</th>
											<th>User Name</th>
											<th>Product Name</th>
											<th>Quantity</th>
										</tr>
										{
                                          this.state.abcd.map((item)=>
							                 <tr>
								                  <td>{item.id}</td>
								                  
								                  <td>{item.fullname}</td>
												  <td>{item.productname}</td>
								                  <td>{item.qty}</td>
							                </tr>
							              )
                                        }
									</table>
								</div>
							</div>
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

export default Checkout;
