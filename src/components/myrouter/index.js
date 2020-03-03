import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom';
import Login from '../login';
export default class MyRoute extends Component {
    render() {
        let {path,component:Com,roles} = this.props;
        // var permission = roles.some((item)=>item===sessionStorage.getItem("username"));
        return (
            // <Route path={path} render={(props)=>{
            //      return loginf?<Com {...props} />:<Login/>
            // }} />

            <Route path={path} render={(props)=>{
                 return <Com {...props} />
            }} />
        )
    }
}
