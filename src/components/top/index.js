import React, { Component } from 'react'
import './top.css'
import {Route,NavLink,Redirect, Switch,withRouter} from 'react-router-dom'
import Rec   from '../rec'
import Phone from '../phone'
import Sound from '../sound'
import Parts from '../parts'
import Life  from '../life'
import Not  from '../not'

 class Top extends Component {
     constructor(props){
         super(props)
         this.state={
            menu:false
         }
     }
     cart=()=>{
         this.props.history.push("/cart")
     }
     more=()=>{ //菜单下拉
        this.setState({
            menu:true
        })
     }
     down=()=>{  //关闭菜单
        this.setState({
            menu:false
        })
     }
    render() {
        return (
            <div>
                <header>
                    <span className="sw"><img src={require("../../img/sw.png")} ></img></span>
                    <svg fill="#00b4ff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="402.048px" height="73.556px" viewBox="17.318 5.824 402.048 73.556"><path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472 h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"></path><rect x="226.517" y="5.824" width="14.426" height="73.556"></rect><path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743 c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416 C119.888,12.841,112.872,5.824,104.296,5.824"></path><path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592 v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43 V23.614z"></path><path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86 v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"></path>
                    </svg>
                    <span className="cm"><span className="cart" onClick={this.cart}><img src={require("../../img/cart.png")} /></span><span className="more" onClick={this.more}><img src={require("../../img/mo.png")} /></span></span>

                    <div className={this.state.menu?"menu menub":"menu"}>
                        <span onClick={this.down}>X</span>
                    </div>
                </header>
                <div>
                    <ul className="nav-bar">
                    <NavLink to="/top/rec">推荐</NavLink>
                    <NavLink to="/top/phone">手机</NavLink>
                    <NavLink to="/top/sound">声学</NavLink>
                    <NavLink to="/top/parts">配件</NavLink>
                    <NavLink to="/top/life">生活</NavLink>
                    </ul>
                </div>
                <main>
                <Switch>
                  <Route path="/top/rec" component={Rec  } />
                  <Route path="/top/phone" component={Phone} />
                  <Route path="/top/sound" component={Sound} />
                  <Route path="/top/parts" component={Parts} />
                  <Route path="/top/life" component={Life } />
                  <Redirect from='/top' to="/top/rec" exact />
                  <Route component={Not}/>
                </Switch> 
                </main>
            </div>
        )
    }
}
export default withRouter(Top)