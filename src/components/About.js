import './../css/style.css';
import Header from './Header';

const About = () => {
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
							<form>
								<table className="login-1">
									<tr className="inpt">
										<td ><span>Username</span></td>
										<td><input type="text" name="" /></td>
									</tr><br />
									<tr className="inpt">
										<td ><span>Password</span></td>
										<td><input type="password" name="" /></td>
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
						<form>
							<table className="login-1">
								<tr className="inpt-1">
									<td ><span>Full Name</span></td>
									<td><input type="text" name="" /></td>
								</tr><br />
								<tr className="inpt-1">
									<td ><span>Email</span></td>
									<td><input type="text" name="" /></td>
								</tr>
								<tr className="inpt-1">
									<td ><span>Password</span></td>
									<td><input type="password" name="" /></td>
								</tr>
								<tr className="logn-btn" >
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
				<div className="list-1">
					<ul>
						<li>HOME</li>
						<li>NEW PROJECT</li>
						<li>SPECIAL</li>
						<li>ALL PRODUCTS</li>
						<li>REVIEWS</li>
						<li>CONTACT</li>
						<li>FAQS</li>
					</ul>
				</div>
				<div className="footer-2">
					<p>Copyright <i className="fa fa-copyright" aria-hidden="true"></i>2013 Enest.Privacy Notice</p>
				</div>
			</div>
		</div>
	</div>
      {/* end here */}
    </div>
  );
}

export default About;
