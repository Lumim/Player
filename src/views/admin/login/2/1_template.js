import React,{useState,useEffect,lazy,Suspense} from 'react'

import data from '../Login_template'

import (`../../../../web_content/login/${data.getFolder(1)}/css/froala_blocks.css`);

const Login_template=(props)=> {

const Login = lazy(()=>import(`${data.Login()}`))  

return (
    <body className="login_temp">
       <Suspense fallback={<div>Page is Loading...</div>}>
         <Login onlogin={props.logdata}/>
      </Suspense>
  </body>

  )
}

export default Login_template
