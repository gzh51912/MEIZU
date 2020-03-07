import React, { Component } from 'react'
import './top.min.css'
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
     mine=()=>{
        this.props.history.push("/mine")
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
     sw=()=>{
         console.log("sw");
         
     }
    render() {
        return (
            <div>
                <header>
                    <span className="sw" onClick={this.sw}><img src={require("../../assets/img/sw.png")} ></img></span>
                    <svg fill="#00b4ff" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="402.048px" height="73.556px" viewBox="17.318 5.824 402.048 73.556"><path d="M321.513,5.824H256.91v12.878h51.478l-49.294,44.581c-8.227,7.023-2.872,16.096,3.958,16.096h65.337V66.472 h-52.117l48.964-44.554C333.52,14.473,328.535,5.824,321.513,5.824"></path><rect x="226.517" y="5.824" width="14.426" height="73.556"></rect><path d="M104.296,5.824h-71.36c-8.576,0-15.618,7.012-15.618,15.588v57.967H31.14V23.743 c0-2.711,2.208-5.041,4.92-5.041h25.31v60.677h14.428V18.702h25.312c2.712,0,4.919,2.329,4.919,5.041v55.636h13.86V21.416 C119.888,12.841,112.872,5.824,104.296,5.824"></path><path d="M148.765,23.614c0-2.712,2.199-4.912,4.911-4.912h55.909V5.824h-58.236c-8.576,0-15.592,7.016-15.592,15.592 v42.37c0,8.576,7.017,15.592,15.592,15.592h58.236V66.5h-55.909c-2.711,0-4.911-2.199-4.911-4.912V49.042h58.43V36.117h-58.43 V23.614z"></path><path d="M405.506,5.824v55.637c0,2.71-2.22,5.039-4.931,5.039h-39.77c-2.711,0-4.892-2.328-4.892-5.039V5.824h-13.86 v57.963c0,8.576,7.018,15.592,15.592,15.592h46.127c8.575,0,15.592-7.017,15.592-15.592V5.824H405.506z"></path>
                    </svg>
                    <span className="cm"><span className="cart" onClick={this.cart}><img src={require("../../assets/img/cart.png")} />
                    </span><span className="more" onClick={this.more}><img src={require("../../img/mo.png")} /></span></span>

                    <div className={this.state.menu?"menu menub":"menu"}>
                        <div className="menu-top">
                            <span className="top">魅族官网</span>
                        <span onClick={this.down} className="down"><img src={require("../../assets/img/down.png")}/></span>
                        </div>
                        <div className="menu-main">
                            <ul className="mine">
                                <li onClick={this.mine}>
                                    <img src="https://fms.res.meizu.com/dms/2018/08/14/15569c6b-5e3f-41da-8dbf-edfd557191fb.png"/>
                                    <span>个人中心</span>
                                </li>
                                <li>
                                    <img src="https://fms.res.meizu.com/dms/2018/08/14/00963788-63ab-4dfc-8722-b59d4096c437.png"/>
                                    <span>我的订单</span>
                                </li>
                                <li>
                                    <img src="https://fms.res.meizu.com/dms/2018/08/14/6c017770-c969-472b-a9b5-47eca996be65.png"/>
                                    <span>我的红包</span>
                                </li>
                                <li>
                                    <img src="https://fms.res.meizu.com/dms/2018/08/14/b39b0e5a-f912-4733-a98d-3acdf4a83940.png"/>
                                    <span>我的优惠券</span>
                                </li>
                                <li>
                                    <img src="https://fms.res.meizu.com/dms/2018/08/14/0e40e9a3-6ad7-4d24-80ee-c5677ea5c48e.png"/>
                                    <span>我的地址</span>
                                </li>
                                <li>
                                    <img src="https://fms.res.meizu.com/dms/2018/08/14/68cb6912-a7a1-482e-b8cf-76960b2dc368.png"/>
                                    <span>我的收藏</span>
                                </li>
                            </ul>
                            <ul id="menuListTwo">
                                <li> <a href="https://detail.mall.meizu.com/item/meizu16s.html?click=mgw_menu_group_2_2"
                                        data-bh="click_mgw_menu_group_2_1" data-mtype="mgw_menu_group_2_2"> <img
                                            src="https://fms.res.meizu.com/dms/2019/04/28/b473ad80-39e8-4e79-96f6-e7238c87b61f.png" alt=""/>
                                        <span>魅族16s</span> </a> </li>
                                <li> <a href="https://detail.mall.meizu.com/item/meizu16xs.html?click=mgw_menu_group_2_3"
                                        data-bh="click_mgw_menu_group_2_2" data-mtype="mgw_menu_group_2_3"> <img
                                            src="https://fms.res.meizu.com/dms/2019/05/30/a6a42f8c-e0ea-4d6c-a0d4-a1cbbd41e65b.png" alt=""/>
                                        <span>魅族 16Xs</span> </a> </li>
                                <li> <a href="http://mcycle.mall.meizu.com/?click=mgw_menu_group_2_4" data-bh="click_mgw_menu_group_2_3"
                                        data-mtype="mgw_menu_group_2_4"> <img
                                            src="https://fms.res.meizu.com/dms/2019/04/28/bd43b2ba-d2d8-4946-a8a5-38d5aa7e16ac.jpg" alt=""/>
                                        <span>以旧换新</span> </a> </li>
                                <li> <a href="http://mformy.meizu.com/?click=mgw_menu_group_2_5" data-bh="click_mgw_menu_group_2_4"
                                        data-mtype="mgw_menu_group_2_5"> <img
                                            src="https://fms.res.meizu.com/dms/2019/05/16/98055a85-393c-4138-8cad-9353b7a6edce.png" alt=""/>
                <span>M码通道</span> </a> </li>
    </ul>
                            <ul id="menuListThree">
                            <li> <a href="https://m.meizu.com/products.html?click=mgw_menu_group_3_2" data-bh="click_mgw_menu_group_3_1"
                                    data-mtype="mgw_menu_group_3_2"> <img
                                        src="https://fms.res.meizu.com/dms/2018/04/11/ec8cb46d-5340-428a-b9bc-3893f4749d80.png" alt=""/>
                                    <span>产品</span> </a> </li>
                            <li> <a href="https://www.flyme.cn/?click=mgw_menu_group_3_3" data-bh="click_mgw_menu_group_3_2"
                                    data-mtype="mgw_menu_group_3_3"> <img
                                        src="https://fms.res.meizu.com/dms/2018/04/11/0ba8483f-464e-4500-879a-66c834b62128.png" alt=""/>
                                    <span>Flyme</span> </a> </li>
                            <li> <a href="https://cloud.flyme.cn/?click=mgw_menu_group_3_4" data-bh="click_mgw_menu_group_3_3"
                                    data-mtype="mgw_menu_group_3_4"> <img
                                        src="https://fms.res.meizu.com/dms/2018/04/11/9ef59a5f-aa24-46a7-9443-275347f42773.png" alt=""/>
                                    <span>云服务</span> </a> </li>
                            <li> <a href="http://retail.meizu.com/?click=mgw_menu_group_3_5" data-bh="click_mgw_menu_group_3_4"
                                    data-mtype="mgw_menu_group_3_5"> <img
                                        src="https://fms.res.meizu.com/dms/2018/04/11/deff1f64-aeff-4b1a-a321-e54626c25d7d.png" alt=""/>
                                    <span>专卖店</span> </a> </li>
                            <li> <a href="http://care.meizu.com/index.html?click=mgw_menu_group_3_6" data-bh="click_mgw_menu_group_3_5"
                                    data-mtype="mgw_menu_group_3_6"> <img
                                        src="https://fms.res.meizu.com/dms/2018/04/11/7a170057-4036-4088-bda3-c0cfbfe70c03.png" alt=""/>
                                    <span>服务支持</span> </a> </li>
                            <li> <a href="https://mf.meizu.cn/?click=mgw_menu_group_3_7" data-bh="click_mgw_menu_group_3_6"
                                    data-mtype="mgw_menu_group_3_7"> <img
                                        src="https://fms.res.meizu.com/dms/2018/04/11/2b57d6ff-3f1d-4907-8e6a-8aab99c89b8b.png" alt=""/>
                                    <span>社区</span> </a> </li>
                            <li> <a href="https://bbs.res.meizu.com/static_new/guide/?click=mgw_menu_group_3_8"
                                    data-bh="click_mgw_menu_group_3_7" data-mtype="mgw_menu_group_3_8"> <img
                                        src="https://fms.res.meizu.com/dms/2018/11/19/6d9b6d21-a84f-439b-a995-b86bbe2aba4d.png" alt=""/>
                                    <span>App下载</span> </a> </li>
                        </ul>
                        
                        </div>
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