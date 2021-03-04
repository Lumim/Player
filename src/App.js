import React,{useEffect,useState,lazy,Suspense} from 'react'
import './web_content/css/style.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Web from './Web'
import data from './views/admin/login/Login_template'
import Dashboard from './controller/admin/Dashboard'
import Dashboard_admin from './Dashboard_admin'
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
//=============================================================



const routes = [
  {
    path: "/",
    exact:true,
    component: Web
  },
  {
    path: "/admin/Login",
    exact:true,
    component: Login
  },
  {
    path: "/admin",
    exact:false,
    component: Dashboard_admin,
    routes: [
      {
        path: "/admin/dashboard",
        exact:true,
        component: Dashboard
      },  {
        path: "/admin/stadium/stadium-all",
        exact:true,
        component: Stadium
      },  {
        path: "/admin/stadium/stadium-edit/:id",
        exact:true,
        component: Stadium_edit
      },  {
        path: "/admin/stadium/stadium-copy/:id",
        exact:true,
        component: Stadium_copy
      },  {
        path: "/admin/stadium/stadium-create",
        exact:true,
        component: Stadium_create
      },
      {
        path: "/admin/player/player-all",
        exact:true,
        component: Player
      },
      {
        path: "/admin/player/player-copy/:id",
        exact:true,
        component: Player_copy
      },
      {
        path: "/admin/player/player-create",
        exact:true,
        component: Player_create
      },
      {
        path: "/admin/player/player-edit/:id",
        exact:true,
        component: Player_edit
      },
     
      {
    
        component: Noc
      }, 
    ]
  },
    {
    
    component: Noc
  }, 
];

function App() {
  return (
    <>
    <Router>
      <div>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
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

function Login() {
  const Login_template =lazy(()=>import(`./${data.logModule()}`))
  return (
    
      <Suspense fallback={<div>Page is Loading...</div>}><Login_template /></Suspense>
    
  )
}
function Noc(){
  return(
    <div>
      <h1>
        404 NOT FOUND
      </h1>
    </div>
  )
}
export default App
