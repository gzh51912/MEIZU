import React, { Component } from 'react'
import Hoc from '../hoc'
import './cart.min.css'
import{cartList,cartData,addNum} from '../../api/request'
class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getCart()
    }
    getCart(){
        cartList(sessionStorage.getItem("user")).then((res)=>{ //根据当前用户是谁来查询他的购物车
                    var data=[]
                    var num=res
            for(var i in res){
                cartData(res[i].gid).then((res)=>{ //根据cart表的gid查询到的商品加入list
                    data.push(res[0])

                    data.map((item,index)=>{ //把数量num添加到data数组种
                       return item["num"]=num[index].num
                    })
                    this.setState({
                        list:data
                    },()=>{
                            console.log(this.state.list);    
                    })
                }) 
            }
        })
    }
     back=(a)=>{ 
         if(a==="1"){
             this.props.history.push("/top/rec")
         }else{
            this.props.history.push("/top/phone")
         }
         
     }
     /////商品id,当前数量，加减，当前用户
     num=(gid, num,as,uid)=>{  //修改购物车中单个商品的数量 
         if(num<=1&& as===-1){
             alert("已经是最小啦！！不能再减少啦！！！")
         }else{
         var newnum=num+as
            addNum(gid, newnum,uid).then((res)=>{ //修改数量
                        console.log(res);
                        this.getCart() //重新调用
                    })
                    console.log(gid, newnum,as,uid);
         }
     }
    render() {
        return (
            <div>
                <div className="carttop">
                    <div className="goback" onClick={this.back.bind(this,"1")}></div>
                    <div className="carttitle">购物车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                </div>
                
                {/* 判断购物车是否有东西 */}
                {
                    this.state.list.length===0?<div className="cart-empty">
                    <p className="msg">购物车内还没有商品，赶紧去选购吧～</p>
                    <p onClick={this.back.bind(this,"2")} className="btn">随便逛逛</p>
                </div>:
                <div className="cart-list">
                <div className="section radio-group merchant-group">
                    <div className="supplier radio-row">
                        <div className="radio radio-merchant"> <em></em></div>
                        <div className="radio-fld">
                            <div className="name">魅族</div>
                        </div>
                    </div>
                    {  
                        this.state.list.map((item)=>{
                            return <div className="secrow radio-row" key={item.id}>
                        <div className="row-item">
                            <div className="radio"><em></em></div>
                            <div className="radio-fld">
                                <div className="item">
                                    <div className="prod-img">
                                        <img src={item.src} />
                                        </div>
                                    <div className="intro">
                                            <h3>{item.title}</h3>
                                            <p className="attrs"><span>红色 1.2米</span></p>
                                        <div className="howmuch">
                                            <div className="price">￥{item.price}.00</div>
                                    <div className="quantity">
                                        <button onClick={this.num.bind(this,item.id,item.num,-1,sessionStorage.getItem("user"))}>-</button>
                                        <span>{item.num}</span>
                                        <button onClick={this.num.bind(this,item.id,item.num,1,sessionStorage.getItem("user"))}>+</button></div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                        })
                    }
                    
                </div>
                </div>
                }
                {/* 商品 */} 
                
            </div>
        )
    }
}
export default Hoc(Cart)