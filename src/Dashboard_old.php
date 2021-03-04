import react,{useEffect,useState,lazy,Suspense} from 'react'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
//================Dashboard==========================
import Dashboard from './controller/admin/Dashboard'
//=====================================================Player
import Player from './controller/admin/Player'
import Player_edit from './views/admin/player/Player_edit'
import Player_copy from './views/admin/player/Player_copy'
import Player_create from './views/admin/player/Player_create'
//=================================================== Stadium

import Stadium from './controller/admin/Stadium'
import Stadium_edit from './views/admin/stadium/Stadium_edit'
import Stadium_copy from './views/admin/stadium/Stadium_copy'
import Stadium_create from './views/admin/stadium/Stadium_create'
//=================================================================
import Left_nav from './views/admin_layout/Left_nav'
import Header from './views/admin_layout/Header'
import Top_menu from './views/admin_layout/Top_menu'
//=================================================================
import data from './views/admin/login/Login_template'
import fetchApi from './controller/fetchApi'


const Dashboard_admin=(props)=> {
    useEffect(() => {
       // 
       setInterval(()=>check(), 5000);
      }, [check])
      
     const log_otp={log_otp:localStorage.getItem('log_otp')}
     console.log(log_otp);
    
      async function check() {
        const data=fetchApi.getApi('api/app/main/login/check/','POST',log_otp).then(function(value) {
         console.log(value)
         if(value.check==0){
          localStorage.clear();
          window.location.replace('http://localhost:3000/admin/login');
         }
         else{
          console.log('ok')
         }
        });
      }
       const check2=async()=>{
        if(log_otp.log_otp==null){
          window.location.replace('http://localhost:3000/admin/login');
        }
        else{
          return true
        }
      }
      //check2()
    return(
        <>
        {/*  <div class="wrapper">
                <nav id="sidebar" class="bg-primary">
                    <Left_nav/>
                </nav> 
                <div id="content">
                    <Header/>
                    <Top_menu/>  */}
           <Router>
           <Switch>
                    
            <Route path='/admin/dashboard' exact component={Dashboard}/>
            <Route path='/admin/player/player-all' exact component={Player}/> 
            <Route path ='/admin/player/player-edit/:id' exact component ={Player_edit}/>
            <Route path='/admin/player/player-copy/:id' exact component={Player_copy}/>
            <Route path='/admin/player/player-create' exact component={Player_create}/>
            {/**===================================================================== */}
            <Route path='/admin/stadium/stadium-all' exact component={Stadium}/>
            <Route path ='/admin/stadium/stadium-edit/:id' exact component ={Stadium_edit}/>
            <Route path='/admin/stadium/stadium-copy/:id' exact component={Stadium_copy}/>
            <Route path='/admin/stadium/stadium-create' exact component={Stadium_create}/>
            {/* <Route component={NotFound} /> */}
            </Switch>
            </Router>
            {/*    </div>
            </div>  */}
    </>
            );
  
      
}
const NotFound=()=>{
    return(
      <div>
        <h1>
          404 NOT FOUND
        </h1>
      </div>
    )
  }

export default Dashboard_admin
