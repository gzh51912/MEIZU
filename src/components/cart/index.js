import React, { Component } from 'react'
import Hoc from '../hoc'
import './cart.min.css'
 class Cart extends Component {
     back=(a)=>{
         console.log(a);
         if(a==="1"){
             this.props.history.push("/top/rec")
         }else{
            this.props.history.push("/top/phone")
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
                <div className="cart-empty">
                    <p className="msg">购物车内还没有商品，赶紧去选购吧～</p>
                     <p onClick={this.back.bind(this,"2")} className="btn">随便逛逛</p>
                </div>

            </div>
        )
    }
}
export default Hoc(Cart)