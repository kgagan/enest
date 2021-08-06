import React from 'react';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';
import axios from 'axios';
import { Link , NavLink } from 'react-router-dom';

class Search extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			s:this.props.data,
			search_data:[]
		}
	}
	componentDidMount() {
		//const data = this.state.s;
		const data = this.props.match.params.url;
		alert(data);
		const fd = new FormData();
        fd.append('search', data);
			axios.post('http://localhost/enest/search.php', fd).then(res=>{
				this.setState({search_data: res.data.mydata});
			}).catch(errors=>{
			  console.log(errors)
			})
	}
  render(){
    return (
    <div>
      {/* start here */}
           <div>
			  {/* start here */}
			  <div className="main-div">
				<Header />
				<div className="main-categorious">
					<div className="footer">
						<LeftSide />
						<div className="contact">
							<div className="contact-us">
								<p>Search Products</p>
							</div>
							

                     {this.state.search_data.map((result) => {
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
      {/* end here */}
    </div>
  );
  }
  
}

export default Search;
