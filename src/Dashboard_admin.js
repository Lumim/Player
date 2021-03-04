import react,{useEffect} from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';

//=================================================================
import Left_nav from './views/admin_layout/Left_nav'
import Header from './views/admin_layout/Header'
import Top_menu from './views/admin_layout/Top_menu'
//=================================================================

import fetchApi from './controller/fetchApi'


function Dashboard_admin({routes}) {
    useEffect(() => {
       // 
       setInterval(()=>check(), 15000);
       
      }, [])
     
     const log_otp={log_otp:localStorage.getItem('log_otp')}
     //console.log(log_otp);
    
      async function check() {
        if(log_otp!==null)  
        {
        const data=fetchApi.getApi('api/app/main/login/check/','POST',log_otp).then(function(value) {
                //console.log(value)
                if(value.check==0){
                localStorage.clear();
                window.location.replace('http://localhost:3000/admin/login');
                }
                else{
                //console.log('ok')
                }
            });
        }
        else{
        //console.log('log otp null?')
        window.location.replace('http://localhost:3000/admin/login');
        }
    }
      check();
 
  return (<>
      <div class="wrapper">
      <nav id="sidebar" class="bg-primary">
          <Left_nav/>
      </nav> 
      <div id="content">
          <Header/>
          <Top_menu/> 

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
    
      </Switch>
    </div>
    </div>
 
          </>
  )
}
      
      
  
      
function RouteWithSubRoutes(route) {
  return (
    <Route
    
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default Dashboard_admin
