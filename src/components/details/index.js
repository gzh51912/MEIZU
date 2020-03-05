import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import store from '../../store'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import './details.min.css'
import{details} from '../../api/request'

 class Details extends Component {
     constructor(props){
         super(props)
         this.state={
            //  id:store.getState().id,
             list:[]
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
         details(1).then((res)=>{
             this.setState({
                list:res
             })
         })
     }
     cart=()=>{
        this.props.history.push("/cart")
     }
    render() {
        return (
            <div>
                <div className="detop">
                    <div className="goback" onClick={this.home}></div>
                    <div className="home" onClick={this.home}></div>
                </div> {
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
                    <div className="cartbu">
                        <div></div>
                        <div></div>
                        <div onClick={this.cart}></div>
                        <div>加入购物车</div>
                        <div>立即购买</div>
                        </div> 
            </div>
        )
    }
}
var mapState=(state)=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Details)