import React, { Component } from 'react'
import './mine.min.css'
import { queries } from '@testing-library/react'

export default class Mine extends Component {
    return=()=>{
        this.props.history.push("/top")
    }
    login=()=>{
        this.props.history.push("/login")
    }
    exit=()=>{
        sessionStorage.clear()
        this.props.history.push("/top")
    }
    render() {
        return (
            <div>
                
                <div className="minetop" >
                    <div className="return">
                        <span onClick={this.return}>返回</span>
                        <div className="touxiang"></div>
                        <span>信息</span>
                    </div>
                    {
                        sessionStorage.getItem("user")?
                        <div className="login">你好！{sessionStorage.getItem("user")}
                         &nbsp;&nbsp;<span onClick={this.exit} style={{color:"yellow"}}>退出</span>
                         </div>:<div className="login" onClick={this.login}> 请点击登录 </div>
                    }
                    
                    
                </div>
                <div>
                    <img src={require("../../assets/img/xinxi.png")} ></img>
                </div>
            </div>
        )
    }
}
