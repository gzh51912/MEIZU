import React, { Component } from 'react'
import './login.min.css'
import {loginto} from '../../api/request'



export default class Login extends Component {
    getLogin(){
        loginto(this.node.value,this.psw.value).then((res)=>{
            // console.log(res);
            if(res.type===1){
                sessionStorage.setItem("token",res.token)
                sessionStorage.setItem("user",this.node.value)
                alert("登录成功，即将跳转")
                // this.props.history.push("/top/rec")
                window.location.href="/top/phone"
            }else{
                alert("账号或密码错误")
            }
        })
     }
     login=()=>{
         if(this.node.value !=="" && this.psw.value !==""){
            this.getLogin() 
         }else{
             alert("请填写完整用户名与密码")
         }
         
     }
    reg=()=>{
        this.props.history.push("/reg")
    }
    render() {
        return (
            <div id="login">
                <div className="logintop">
                    <span>账号登录</span>
                    <span className="shu">|</span>
                    <span className="yan">验证码登录</span>
                </div>
                <div className="flyme">
                    <input type="text" placeholder="请输入Flyme账号" ref={(node)=>this.node=node} />
                    <input type="password" placeholder="密码" ref={(psw)=>this.psw=psw} />
                    <button className="int" onClick={this.login}>登录</button>
                    <span className="reg" onClick={this.reg}>注册</span>
                </div>
            </div>
        )
    }
}
