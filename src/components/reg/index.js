import React, { Component } from 'react'
import './reg.min.css'
import {Checkname,Regto} from '../../api/request'
import axios from 'axios'
export default class Reg extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        window.document.title="注册"
    }
    componentDidMount(){
       
     }
     getReg(){
         let name=this.node.value
         let password=this.psw.value
         axios.get('http://47.113.120.143:5555/meizuuser/checkname',{params:{name}}).then((res)=>{
            console.log(res);
            if(res.data.type===1){
                axios.post('http://47.113.120.143:5555/meizuuser/reg',{name,password}).then((res)=>{
                   
                    if(res.data.type===1){
                        alert("注册成功，即将跳转至登录页面")
                        this.props.history.push("/login")
                    }
                })
            }else{
                alert("该用户名已经被注册，换其他的试试吧")
            }
        })
     }
    login=()=>{
        this.props.history.push("/login")
    }
    reg=()=>{ //点击注册
        if(this.node.value!==""&& this.psw.value!==""){
             this.getReg()
        }else{
            alert("请把账号跟密码都写上")
        }
       
    }
    render() {
        return (
            <div id="zhuce">
                <div className="zhucetop">
                    <span>注册</span>
                    
                </div>
                <div className="flyme">
                    <input type="text" placeholder="请输入Flyme账号" ref={(node)=>this.node=node} />
                    <input type="password" placeholder="密码" ref={(psw)=>this.psw=psw} />
                    <button className="int" onClick={this.reg} >立即注册</button>
                    <span className="reg" onClick={this.login}>登录</span>
                </div>
            </div>
        )
    }
}
