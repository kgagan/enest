import React from 'react'; 
import { Link , Redirect} from "react-router-dom";
import Search from './Search';


class Header extends React.Component{
	constructor(){
		super()
		 this.state ={
		 	search:'',
		 	search_redirect:false,
			redirect : false,
		 }
		 this.logout = this.logout.bind(this);
		 this.addForm = this.addForm.bind(this);
	  }
	  addForm(e)
      {
	          this.setState({search_redirect:true})
	       
      }
	  componentDidMount(){
		if(localStorage.getItem("uid")){
		}
		else{
			console.log("call user feed");
			this.setState({redirect : true});
		}
	 }
	logout(){
		localStorage.setItem("uid",'');
		localStorage.clear();
		this.setState({redirect : true});
		alert("logout Successfully");
		
	  
	}
	render(){
		
        return (
			<div>
				{(() => {
        if (this.state.search_redirect) {
          return (
            <div>
               <Search data={this.state.search} />
            </div>
          )
        } 
         else {
          return (
            <div><div className="head-div">
				 <div className="main">
					 <div className="head">
						 <span>ENEST</span>
						 <p>THE BIGGEST CHOICE OF THE WEB</p>
					 </div>
					 <div className="btn">
					 

					 {(() => {
        if (this.state.redirect) {
          return (
            <Link to="/create-accout">
				<input type="button" name="" value="Log in" />
			</Link>
          )
        } else {
          return (
			<input type="button" name="" value="Log out" onClick={this.logout}/>
          )
        }
      })()}


					
					 </div>
				 </div>
			   </div>
			   <div className="home-page">
				  <div className="pagnation">
					 <div className="list">
						 <ul>
							 <li><Link to="/">HOME</Link></li>
							 <li><Link to="/new-products">NEW PRODUCT</Link></li>
							 <li><Link to="/special-products">SPECIAL</Link></li>
							 <li><Link to="/all-products">ALL PRODUCTS</Link></li>
						 
							 <li><Link to="/contact">CONTACT</Link></li>
							 
						 </ul>
					 </div>
					
					 <div className="search">
						 <div className="search-1">
							 <div className="input">
								 <input type="text" name="" 
								  value={this.state.search}
								  onChange={e => this.setState({ search: e.target.value })}/>
							 </div>
							 <div className="btnn">
							   <Link to = {`/search-products/${this.state.search}`}>
								 <input type="submit" name="" value="Search" />
							    </Link>
							 </div>
						 </div>
					 </div>
					 
				 </div>
			   </div>
			   <div className="null"></div></div>
          )
        }
      })()}
			</div>
		 )
	}   
}
export default Header;