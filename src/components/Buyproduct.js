import React from 'react';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Buyproduct extends React.Component{
	constructor(){
		super()
		this.state = {
			product_detail:[],
			title:'',
			pid:'',
			uid:''
		}
		this.addFormData = this.addFormData.bind(this);
		this.input = React.createRef();
		this.input1 = React.createRef();
	}
	componentDidMount() {
		const session =localStorage.getItem("uid");
		this.setState({uid: session});
		//alert(session);
		const url = this.props.match.params.url;
		const fd = new FormData();
        fd.append('pid', url);
		if(url){
			//alert(url);
			//axios.get(`http://localhost/enest/products_detail.php/${url}`).then(res=>{
			axios.post('http://localhost/enest/pro_detail.php', fd).then(res=>{
				this.setState({product_detail: res.data.mydata});
			}).catch(errors=>{
			  console.log(errors)
			})
		}
	}
	addFormData(e)
    {
	  e.preventDefault();
	  //alert('A name was submitted: ' + this.input.current.value);
	  const pvalue = this.input.current.value;
	  const uid = this.input1.current.value;
	  alert(uid);
      const fd = new FormData();
      fd.append('pid', pvalue);
      fd.append('uid', uid);
      fd.append('qty', this.state.qty);
      axios.post('http://localhost/enest/cart.php', fd).then(res=>
      {
          this.setState({
               pid:'',
               uid :'',
               qty :''
           })
          //this.myFormRef.reset();
       }).catch(errors=>{
		console.log(errors)
	  })
      
    }
	render(){
		return (
			<div>
			  {/* start here */}
			  <div class="main-div">
				<Header />
				<div class="main-categorious">
					<div class="footer">
						<LeftSide />
						<div class="contact">

	{(() => {
        if (Array.isArray(this.state.product_detail) && this.state.product_detail.length) {
          return (
			<div>

               <form onSubmit={this.addFormData}>
				<div class="contact-us">
				<p>{this.state.product_detail[0].productname}</p>
				</div>
                <div class="dish-info">
								<div class="machine-pic">
									<div class="img">
										{/*<img src={require('./../images/1.jpeg').default} />*/}
										<img src={`/images/${this.state.product_detail[0].productimage}`} alt="no img" />
									</div>
									<div class="stock">
										<p>In Stock:{this.state.product_detail[0].productquantity}</p>
									</div>
									<div class="detail">
										<span>Details:</span>
										<p>{this.state.product_detail[0].productname}</p>
									</div>
								</div>
								<div class="machine-info">
									<div class="washer">
										<p>{this.state.product_detail[0].productname}</p>
									</div>
									<div class="model-info">
										<span>Model:{this.state.product_detail[0].productname}</span>
										<p>Manufacturer:{this.state.product_detail[0].productname}</p>
									</div>
									<div class="quantity">
										<form>
											<table>
												<tr>
													<td class="qty">Enter quantity</td>
													<td><input type="text" name="qty" value={this.state.qty}
													onChange={e => this.setState({ qty: e.target.value })} /></td>
												</tr>
											</table>
										</form>
										<div class="price">
											<span>Rs.{this.state.product_detail[0].productprice}</span>
										</div>
									</div>
									<input type="hidden" name="pid" ref={this.input} value={this.state.product_detail[0].id} />
									<input type="hidden" name="uid" ref={this.input1} value={this.state.uid} />
									<div class="cart">
										<input type="submit" name="" value="Add to Cart" />
									</div>
									<div class="checkout">
									    <Link to="/checkout">
										  <input type="submit" name="" value="checkout" />
									    </Link>
									</div>
								</div>
							</div>
                         </form>

			</div>
			
		  )
	    }
    })()}
								
							
							
							<div class="info">
								<form>
									<table class="table-info">
										<tr>
											<td class="nme">Enter name</td>
											<td><input type="" name="" /></td>
										</tr>
										<tr>
											<td class="nme">Enter Email</td>
											<td><input type="" name="" /></td>
										</tr>
										<tr>
											<td class="nme">Enter Review</td>
											<td><textarea></textarea></td>
										</tr>
										<tr>
											<td class="nme">Rating</td>
											<td><input type="" name="" /></td>
										</tr>
										<tr>
											<td class="btnn-1">
												<input type="submit" name="" value="Submit query" />
											</td>
										</tr>
									</table>
								</form>
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

export default Buyproduct;
