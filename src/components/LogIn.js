import React from 'react';
import './../css/style.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class LogIn extends React.Component{
	constructor(){
		super()
		this.state = {
			fullname:'',
			email:'',
			password:'',
			user_name:'',
			user_pass:'',
			login_detail:[]
		}
		this.addFormData = this.addFormData.bind(this);
		this.checkLogin = this.checkLogin.bind(this);
	}
	addFormData(e)
    {
	  e.preventDefault();
      const fd = new FormData();
      fd.append('fullname', this.state.fullname);
      fd.append('email', this.state.email);
      fd.append('password', this.state.password);
      axios.post('http://localhost/enest/signup.php', fd).then(res=>
      {
          this.setState({
               fullname:'',
               email :'',
               password :'',
			   redirect : false,

           })
       }).catch(errors=>{
		console.log(errors)
	  })
      
    }
	checkLogin(e)
    {
	  e.preventDefault();
      const fd = new FormData();
      fd.append('username', this.state.user_name);
      fd.append('userpass', this.state.user_pass);
      axios.post('http://localhost/enest/checklogin.php', fd).then(res=>
      {
		console.log(res.data.msg);
		this.setState({login_detail: res.data.mydata});
          this.setState({
               user_name:'',
               user_pass :''	
           })
		   if(res.data.msg){
			localStorage.setItem('uid' , res.data.mydata[0].id);
			//sessionStorage.setItem('success' , 'login Successsfully');
			this.setState({redirect : true}); 
			//alert("login Successsfully you are");
	        this.props.history.push("/");
			}
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
					<div className="login-here">
						<div className="login">
							<p>Login Here</p>
							<div  className="user-info">
								<form onSubmit={this.checkLogin}>
									<table className="login-1">
										<tr className="inpt">
											<td ><span>Username</span></td>
											<td><input type="text" name="" value={this.state.user_name}
										    onChange={e => this.setState({ user_name: e.target.value })}/></td>
										</tr><br />
										<tr className="inpt">
											<td ><span>Password</span></td>
											<td><input type="password" name="" value={this.state.user_pass}
										    onChange={e => this.setState({ user_pass: e.target.value })}/></td>
										</tr>
										<tr className="logn-btn" >
											<td></td>
											<td><input className="log" type="submit" name="" value="Login" />
											</td>
										</tr>
									</table>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="sign-up">
					<div className="sign">
						<p>New to Enest? <a href=""> Sign up</a></p>
						<div  className="user-info">
							<form onSubmit={this.addFormData}>
								<table className="login-1">
									<tr className="inpt-1">
										<td ><span>Full Name</span></td>
										<td><input type="text" name="" value={this.state.fullname}
										onChange={e => this.setState({ fullname: e.target.value })}/></td>
									</tr><br />
									<tr className="inpt-1">
										<td ><span>Email</span></td>
										<td><input type="text" name="" value={this.state.email}
										onChange={e => this.setState({ email: e.target.value })}/></td>
									</tr>
									<tr className="inpt-1">
										<td ><span>Password</span></td>
										<td><input type="password" name="" value={this.state.password}
										onChange={e => this.setState({ password: e.target.value })}/></td>
									</tr>
									<tr className="logn-btn">
										<td></td>
										<td><input className="log" type="submit" name="" value="Sign up" />
										</td>
									</tr>
								</table>
							</form>
						</div>
					</div>
				</div>
				<div className="footer-1">
					<Footer/>
				</div>
			</div>
		</div>
		  {/* end here */}
		</div>
	  );

 }
}

export default LogIn;
