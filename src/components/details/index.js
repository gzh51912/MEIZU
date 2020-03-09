import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import store from '../../store'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import './details.min.css'
// import{details,checkCart,addCart,addNum,token} from '../../api/request'
import axios from 'axios';
 class Details extends Component {
     constructor(props){
         super(props)
         this.state={
            //  id:store.getState().id,
             list:[],
             num:1
         }
        
     }
     componentDidMount(){
          this.getData()
         window.document.title="详情"
          
     }
     componentDidUpdate(){ 
         // 轮播图
        new Swiper('.swiper-container',{
            direction: 'horizontal', // 垂直切换选项
            loop:true,//循环模式
            autoplay:{
                delay:2000,
                disableOnInteraction:false
            },
            //如果需要分页器
            pagination:{
                el:'.swiper-pagination'
            }
        })
     }
     home=()=>{
        this.props.history.push("/top")
     }
     getData(){
         let id=store.getState().id
         axios.get('http://47.113.120.143:5555/meizugoods/details',{params:{id}}).then((res)=>{
             this.setState({
                list:res.data
             })
         })
     }
     cart=()=>{
        this.props.history.push("/cart")
     }
     add=(a)=>{
        
         if(this.state.num>=1){
             this.setState({
            num:this.state.num+a
        },()=>{ //异步
            // console.log(this.node.innerText);
            // console.log(this.state.list[0].id);
            
        })
        
         }
     }
     addCart=()=>{
        let token=sessionStorage.getItem("token")
            axios.get("http://47.113.120.143:5555/meizuuser/verify",{params:{token}}).then((res)=>{  //token验证
            // console.log(res);
            if(res.data.type===1){
                 this.getCart()
                console.log("token通过");
            }else{
                alert("token验证失败，请登录")
                this.props.history.push("/login")
            }
        })
     }
     getCart(){  //加入购物车发送请求
        let gid=this.state.list[0].id
        let uid=sessionStorage.getItem("user")
        axios.get('http://47.113.120.143:5555/meizugoods/checkcart',{params:{gid,uid}}).then((res)=>{
            // console.log(res);
            if(res.data[0]){ //增加数量
                let num=res.data[0].num*1 + this.node.innerText*1
                // console.log(newnum);
                
                axios.put("http://47.113.120.143:5555/meizugoods/addnum",{gid,num,uid}).then((res)=>{
                    // console.log(res);
                    alert(res.data.msg)
                })
            }else{  //添加到购物车
                let num=this.node.innerText
                console.log(gid, num,uid);
                
                axios.post("http://47.113.120.143:5555/meizugoods/addcart",{gid, num,uid}).then((res)=>{
                    console.log(res);
                    if(res.data.type===1){
                        alert(res.data.msg)
                    }else  if(res.data==="请填写全"){
                        alert("请登录")
                        this.props.history.push("/login" )
                    }
                })
            }
            
        })
     }  
    render() {
        return (
            <div>
                <div className="detop">
                    <div className="goback" onClick={this.home}></div>
                    <div className="home" onClick={this.home}></div>
                </div>
                 {
                         this.state.list.map((item)=>{
                            return <div className="swiper-container"   key={item.id} style={{marginTop:"36px"} }>
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide"><img src={item.src} /></div>
                                        <div className="swiper-slide"><img src="//openfile.meizu.com/group1/M00/06/A8/Cgbj0FusSKiAW4z7AALHc8pivJY472.png480x480.jpg" /></div>
                                        <div className="swiper-slide"><img src='//openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png480x480.jpg' /></div> 
                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                         })
                     }
                     {
                        this.state.list.map((item)=>{
                           return <div className="detitle" key={item.id}>
                                        <h4>{item.title}</h4>
                        <p className="deprice">￥{item.price}</p>
                        <p className="deslogan">{item.slogan}</p>
                                    </div>
                        })  
                     }
                    <div className="server">
                    <ul>
                        <li><i className="icon icon-service"></i>花呗分期</li>
                        <li><i className="icon icon-service"></i>顺丰发货</li>
                        <li><i className="icon icon-service"></i>7天无理由退货（激活后不支持）</li>
                    </ul>
                    </div>
                    <section className="selected">
                        <label>已选</label>
                        <p>
                            <span className="s-selected">全网通公开版,鲸跃蓝,6+128GB,官方标配</span>
                            <span className="quantity">
                                <button onClick={this.add.bind(this,-1)}>-</button>
                                ×<span ref={(node)=>this.node=node}>{this.state.num}</span>
                                <button onClick={this.add.bind(this,1)}>+</button>
                            </span>
                        </p>
                        <i className="icon icon-enter" id="J_prodPromoEnter"></i>
                    </section>


                     {/* 底部 */}
                    <div className="cartbu">
                        <div></div>
                        <div></div>
                        <div onClick={this.cart}></div>
                        <div onClick={this.addCart}>加入购物车</div>
                        <div onClick={this.addCart}>立即购买</div>
                        </div> 
            </div>
        )
    }
}
var mapState=()=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Details)