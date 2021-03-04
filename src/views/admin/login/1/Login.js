import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const Login=()=> {
	const[email,setEmail] = useState('')
	const[password,setPassword] = useState('')
	const[error,setMessage]=useState('Enter Email and Password')
	const history = useHistory();
//------------------------------------------------------------------ON SUBMIT------------------------
	const onSubmit = (e) => {
		
		e.preventDefault();
		if (!password && !email) {
			setMessage('Please add a Email or Password')
		}else{
			login_submit({email,password})
			//props.onlogin(prev => '0') 	
		}
		
	}
//===========================================================EDIT PLAYER ======================
	const login_submit= async (info)=>{
		var login_data={login_data:info};
		const res= await fetch('http://localhost:8000/api/app/main/login',{
			method: 'POST',
			headers: {
			  'Content-type': 'application/json',
			},
		   
			body: JSON.stringify(login_data),
		  });
		const x = await res.json();
		console.log(x.session_data);
		if(!x.session_data){
			console.log('hello no data')
		}
		else{
			const host =window.location.host
			
			const url ='http://'+host.concat('/',x.session_data.user_default_page)
			console.log(url)
			console.log(x.session_data.token)
			localStorage.setItem('token',x.session_data.token)
		//	window.open(url,'_blank')
			window.location.replace(url);
		}
	}


	return (
		<section className="fdb-block bg-transparent border-0" >
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-7 col-xl-5 text-center">
						<form  className="" method="post" onSubmit={onSubmit}>
							
							
							<h2 className="text-white font-weight-bold">Company info name</h2>
							<h3 className="text-dark mb-0"><span>Something 1 Management System</span></h3>
							<p className="description text-dark">Dear user, log in to access the admin area!</p>
							
							<div className="fdb-box">
								<div className="row">
									<div className="col">
										<h2 className="text-dark">Log In </h2>
										
										<div className="alert alert-danger font-weight-bold">
											<p>{error}</p>	
										</div>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col">
										<input type="text" className="form-control" title="Must contain '@' character after a name and before domain end"
										 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Email or Mobile" required/>
										<div className="col-md-offset-2"></div>
									</div>
								</div>
								<div className="row mt-4">
									<div className="col">
										<input type="password" name="password" className="form-control mb-1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
										<div className="col-md-offset-2"></div>
										
									</div>
								</div>
								<div className="row mt-4">
									<div className="col">
										<input  type="submit" name="login" className="btn btn-outline-danger" />
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Login
