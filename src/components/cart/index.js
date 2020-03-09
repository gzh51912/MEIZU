import React, { Component } from 'react'
// import Hoc from '../hoc'
import './cart.min.css'
import axios from 'axios';
// import{cartList,cartData,addNum,Delete,token} from '../../api/request'
export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            allselected:false,  //全选
            settlement:0,
            isok:true
        }
        this.token()
    }
    componentDidMount(){
        window.document.title="购物车"
    }
    token(){
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
    getCart(){
        let uid=sessionStorage.getItem("user")
        axios.get("http://47.113.120.143:5555/meizugoods/usercart",{params:{uid}}).then((res)=>{ //根据当前用户是谁来查询他的购物车
                    var data=[]
                    var num=res.data
                    
                    
            for(var i in res.data){
               let gid=res.data[i].gid
               axios.get('http://47.113.120.143:5555/meizugoods/cartdata',{params:{gid}}).then((res)=>{ //根据cart表的gid查询到的商品加入list
                    data.push(res.data[0])

                    data.map((item,index)=>{ //把数量num添加到data数组中
                       // eslint-disable-next-line no-sequences
                       return item["num"]=num[index].num,item["selected"]=false
                    })
                    this.setState({
                        list:data
                    },()=>{
                            // console.log(this.state.list);    
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
         var num=num+as
         axios.put("http://47.113.120.143:5555/meizugoods/addnum",{gid, num,uid}).then((res)=>{ //修改数量
                        // console.log(res);
                        this.getCart() //重新调用
                    })
                    // console.log(gid, newnum,as,uid);
         }
     }
     selected=(gid)=>{ //点击改变选中
         var data2=[]
         this.state.list.forEach((item)=>{
             if(item.id===gid){
                 item.selected=!item.selected
             }
             return data2.push(item)
         })
         this.setState({
             list:data2,
             allselected:this.state.list.every(item=>item.selected)
         }) 
        // this.state.list.every(item=>item.selected) //list里的selected都为真则为真
        // console.log(this.state.list);
        this.zongjia()
     }
     allse=()=>{ //全选
        var data3=[]
       var all=!this.state.allselected
        this.state.list.forEach((item)=>{
            item.selected = all
            return data3.push(item)
        })
        // console.log(data3);
        this.setState({
            list:data3,
            allselected:all
        }) 
        this.zongjia()
       
     }
     zongjia(){ //计算总价
        var allprice=0
        this.state.list.forEach((item)=>{
            if(item.selected){
                allprice+= item.price*item.num
            }
            return allprice
        })
            // console.log(allprice);
            this.setState({
                settlement:allprice
            })
     }
     editor=()=>{  //改变删除结算按钮  编辑->完成
         this.setState({
             isok:!this.state.isok
         })
     }
     rem=()=>{  //根据id删除
        let token=sessionStorage.getItem("token")
            axios.get("http://47.113.120.143:5555/meizuuser/verify",{params:{token}}).then((res)=>{  //token验证
            if(res.data.type===1){
                this.getCart()
        this.state.list.forEach((item)=>{
            if(item.selected){
                // console.log(item.id);
                axios.delete(`http://47.113.120.143:5555/meizugoods/del/${item.id}`).then((res)=>{
                     this.getCart()
                    console.log(res.data.msg);
                    let user=sessionStorage.getItem("user")
        axios.get("http://47.113.120.143:5555/meizugoods/usercart",{params:{user}}).then((res)=>{ //重新发送请求查询购物车是否为空
                        // console.log(res);
                        if(res.data.length===0){ //购物车为空 重新渲染页面
                            this.setState({
                                list:[]
                            })
                        }
                    })
                })
            }
        }) 
            }else{
                alert("请重新登录")
                this.props.history.push("/login")
            }
        })
        
       
     }
    render() {
        return (
            <div>
                <div className="carttop">
                    <div className="goback" onClick={this.back.bind(this,"1")}></div>
                    <div className="carttitle">购物车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div className="editor" onClick={this.editor}>{this.state.isok?"编辑":"完成"}</div>
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
                        <div className="radio radio-merchant"> <em onClick={this.allse}>
                            {this.state.allselected?<img src={require("../../assets/img/yes.png")}/>
                        :<img src={require("../../assets/img/on.png")}/>}</em></div>
                        <div className="radio-fld">
                            <div className="name">魅族</div>
                        </div>
                    </div>
                    {  
                        this.state.list.map((item)=>{
                            return <div className="secrow radio-row" key={item.id}>
                        <div className="row-item">
                        <div className="radio"><em onClick={this.selected.bind(this,item.id)}>
                            {item.selected?<img src={require("../../assets/img/yes.png")}/>
                        :<img src={require("../../assets/img/on.png")}/>}</em></div>
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
                {/* 底部 */} 
                {
                    this.state.list.length!==0?<div className="foot">
                    <div className="radio radio-merchant"> <em onClick={this.allse}>
                            {this.state.allselected?<img src={require("../../assets/img/yes.png")}/>
                        :<img src={require("../../assets/img/on.png")}/>}</em>
                    </div>
                    <div className="total">
                    {this.state.isok?<><label>总计:</label>
                    <span>￥{this.state.settlement}</span></> :""}
                    {this.state.isok? <div className="settlement">结算</div>:<div className="del" onClick={this.rem}>删除</div> }
                    </div>
                </div>:<div></div>
                }
                
            </div>
        )
    }
}
// export default Hoc(Cart)
