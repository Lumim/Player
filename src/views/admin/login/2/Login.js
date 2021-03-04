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
			console.log('entered login')
			login_submit({email,password})
			//props.onlogin(prev => '0') 	
		}
		
	}
//===========================================================EDIT PLAYER ======================
	const login_submit= async (info)=>{
		var login_data={login_data:info};
		const res= await fetch('http://localhost:8000/api/app/main/login',{
			//mode: 'no-cors',
			method: 'POST',
			headers: {
			  'Content-type': 'application/json',
			},
		   
			body: JSON.stringify(login_data),
		  });
		const x = await res.json();
		//console.log(x.session_data);
		if(!x.session_data){
			console.log('hello no data')
			setMessage('Error in Email or Password entry')
		}
		else{
			const host =window.location.host
			
			const url ='http://'+host.concat('/',x.session_data.user_default_page)
			/* console.log(url)
			console.log(x.session_data)*/
			localStorage.setItem('full_name',x.session_data.full_name)
			localStorage.setItem('log_otp',x.session_data.log_otp)
			localStorage.setItem('role_status',x.session_data.role_status)
			localStorage.setItem('user_page_list_id',x.session_data.user_page_list_id)
			localStorage.setItem('user_role_name',x.session_data.user_role_name)
			localStorage.setItem('user_default_page',x.session_data.user_default_page)
			localStorage.setItem('id',x.session_data.id)


			const items = { ...localStorage }
			//console.log(items.id);
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
							<h3 className="text-dark mb-0"><span>Something 2 Management System</span></h3>
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
