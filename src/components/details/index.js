import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import store from '../../store'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import './details.min.css'
import{details,checkCart,addCart,addNum} from '../../api/request'

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
         details(store.getState().id).then((res)=>{
             this.setState({
                list:res
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
         this.getCart()
        // console.log(this.node.innerText);
        // console.log(this.state.list[0].id);
     }
     getCart(){  //加入购物车发送请求
        checkCart(this.state.list[0].id,sessionStorage.getItem("user")).then((res)=>{
            console.log(res);
            if(res[0]){ //增加数量
                let newnum=res[0].num*1 + this.node.innerText*1
                console.log(newnum);
                
                addNum(this.state.list[0].id,newnum,sessionStorage.getItem("user")).then((res)=>{
                    console.log(res);
                    alert(res.msg)
                })
            }else{  //添加到购物车
                addCart(this.state.list[0].id,this.node.innerText,sessionStorage.getItem("user")).then((res)=>{
                    console.log(res);
                    if(res.type===1){
                        alert(res.msg)
                    }else  if(res==="请填写全"){
                        alert("请登录")
                        window.location.href="/login" 
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