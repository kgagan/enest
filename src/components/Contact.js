import React from 'react';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import LeftSide from './LeftSide';
import axios from 'axios';

class Contact extends React.Component{
	constructor(){
		super()
		this.state = {
			fullname:'',
			email:'',
			message:''
		}
		this.addForm = this.addForm.bind(this);
	}
	addForm(e)
    {
	  e.preventDefault();
      const fd = new FormData();
      fd.append('fullname', this.state.fullname);
      fd.append('email', this.state.email);
      fd.append('message', this.state.message);
      axios.post('http://localhost/enest/contact.php', fd).then(res=>
      {
          this.setState({
               fullname:'',
               email :'',
               message :'',

           })
       }).catch(errors=>{
		console.log(errors)
	  })
      
    }
  render(){
    return (
    <div>
      {/* start here */}
      <div className="main-div">
		
		<Header/>
		<div className="main-categorious">
			<div className="footer">
				<LeftSide />
				<div className="contact">
					<div className="contact-us">
						<p>CONTACT US</p>
					</div>
					<div className="costomer-info">
						<div className="costomer-service">
							<p>Customer Service:91 7508115758</p>
							<p>Ludhiana,Punjab,INDIA</p>
							<p>Yorex Infotec.</p>
						</div>
						<hr className="hr" />
						<div className="info">
							<div className="required-info">
								<h4>Contact Us</h4>
								<p>Have a question? We have 24x7 Costomer Service.</p>
								<p>Befor you contact us,skim through our self Serve opton and Frequently Asked Question for Quicker answer.</p>
								<p>Want to know more about the status of the orders?</p>
								<p>Login to view our order.</p>
							</div>
						</div>
						<div className="border">
							<div className="border-1">
								<div className="border-2">
									<p>Contact Us</p>
								</div>
								<div className="requir-info">
									<span>*Required information</span>
								</div>
								<div className="input-info">
									<div className="input-information">
										<form onSubmit={this.addForm}>
											<table className=" form">
												<tr>
													<td ><p>full Name* </p></td>
													<td><input type="text" name="" value={this.state.fullname}
										                 onChange={e => this.setState({ fullname: e.target.value })}/></td>
												</tr>
												<tr>
													<td > <p>E-mail Address </p></td>
													<td><input type="email" name="" value={this.state.email}
										                onChange={e => this.setState({ email: e.target.value })}/></td>
												</tr>
												<tr>
													<td> <p>Message</p></td>
													<td><textarea value={this.state.message}
										                onChange={e => this.setState({ message: e.target.value })}></textarea></td>
												</tr>
											</table>
											<div className="snd-btn">
							<button>Send Now</button>
						</div>
										</form>
									</div>
								</div>
							</div>
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

export default Contact;
