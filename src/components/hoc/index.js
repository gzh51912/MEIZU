import React from 'react';
import Login from '../login'
import {token} from '../../api/request'

var Hoc=(Com)=>{
    
    let isok =true
            token(sessionStorage.getItem("token")).then((res)=>{  //token验证
                if(res.type===1){
                     isok=true 
                }else{
                    isok=false
                }
            })
    return class extends React.Component {
        
        render(){ 
            console.log(isok);
            if(isok) //如果验证通过
                 return  <Com {...this.props} />
            else{
                return <Login/>
            }
        }
    }
}

export default Hoc;