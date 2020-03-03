import React from 'react';
import Login from '../login'
var Hoc=(Com)=>{
    
    return class extends React.Component {
        render(){
            if(sessionStorage.getItem("token"))
                 return  <Com {...this.props} />
            else{
                return <Login/>
            }
        }
    }
}

export default Hoc;