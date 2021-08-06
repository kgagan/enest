import React from 'react'; 
import axios from 'axios';
import {Link} from 'react-router-dom';	

class LeftSide extends React.Component {
	constructor(props) {
		super(props)
		  this.state = {
			data: []
		   }
		 }
	
	componentDidMount(){
	  axios.get('http://localhost/enest/fetch_category.php').then(res => 
		{		
		  this.setState({data: res.data});
		})
		.catch(errors=>{
            console.log(errors)
        }) 
			
	}
	render(){
		return (
			<div>
				<div className="categorious">
						 <div className="cate-heading">
							 <p>CATEGORIES</p>
						 </div>
						 <div className="items">
							 <ul>
							 {this.state.data.map((result) => {
                              return (
							  <Link to = {`/show-products/${result.id}`}>
								 <li>{result.catname}</li>
								 </Link>
								 )
								})}
							 </ul>
						 </div>
					 </div>
			</div>
		 )

	}   
}
export default LeftSide;