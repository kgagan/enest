import React from 'react'; 
import { Link , Redirect} from "react-router-dom";

class Footer extends React.Component{
	render(){
        return (
			<div>
                <div className="list-1">
					<ul>
                             <li><Link to="/">HOME</Link></li>
							 <li><Link to="/new-products">NEW PRODUCT</Link></li>
							 <li><Link to="/special-products">SPECIAL</Link></li>
							 <li><Link to="/all-products">ALL PRODUCTS</Link></li>
							 <li><Link to="/contact">CONTACT</Link></li>
					</ul>
				</div>
				<div className="footer-2">
					<p>Copyright <i className="fa fa-copyright" aria-hidden="true"></i>2013 Enest.Privacy Notice</p>
				</div>
            </div>
		 )
	}   
}
export default Footer;