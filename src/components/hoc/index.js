import React from 'react';
import Login from '../login'
// import {token} from '../../api/request'
import axios from 'axios';

var Hoc=(Com)=>{
    
    let isok =true
    let token=sessionStorage.getItem("token")
            axios.get("http://47.113.120.143:5555/meizuuser/verify",{params:{token}}).then((res)=>{  //token验证
            console.log(res.data);
            
                if(res.data.type===1){
                     isok=true 
                }else{
                    isok=false
                }
            })
    return class extends React.Component {
        
        render(){ 
            // console.log(isok);
            if(isok) //如果验证通过
                 return  <Com {...this.props} />
            else{
                return <Login/>
            }
        }
    }
}

export default Hoc;