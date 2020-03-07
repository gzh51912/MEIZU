import React, { Component } from 'react'
import './search.min.css'
import {search} from '../../api/request'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[],
            wu:""
        }
    }
    goback=()=>{
        this.props.history.push("/top")
    }
    sw=()=>{
        console.log(this.node.value);
        search(this.node.value).then((res)=>{
            console.log(res);
            if(res.length!==0){
                this.setState({
                     list:res
                })
            }else{
                this.setState({
                    wu:"搜不到哦！换个关键词试试吧 比如”耳机"
               })
            }
            
        })
    }
    phone=(id)=>{
        this.props.phone(id)
        this.props.history.push("/details")
        
     }
    render() {
        return (
            <div>
                <div className="header2">
                    <div className="search-form">
                        
                            <div className="so-keyword"><input type="search" className="so-input" defaultValue="" placeholder="🔍" name="keyword" ref={(node)=>this.node=node} />
                            <span className="btn-clear"></span></div>
                            <button type="submit"name="" onClick={this.sw}>搜索</button>
                        
                    </div>
                    <div className="goback" onClick={this.goback}><i className="iconfont ico-back"></i></div>
                </div>
            {this.state.list.length?<div> 搜索结果为
                <div className="phone-list">
                        {/* 列表 */}
                        {
                            this.state.list.map((item)=>{
                                return <div className="phone-content" key={item.id} onClick={this.phone.bind(this,item.id)}>
                                         <img src={item.src} />
                                         <div className="info">
                                              <p className="title">{item.title}</p>
                                              <p className="slogan ">{item.slogan}</p>
                                         </div>
                                         <p className="price"><i>￥</i>{item.price}<em></em><s></s></p>
                                        </div> 
                            })
                        }
                    
                    </div>
                </div>:<div>
                    {this.state.wu===''?<div className="cart-empty">
                        <p className="msg">请输入关键字搜索～</p></div>
                        :<div className="cart-empty">
                    <p className="msg">{this.state.wu}</p>
                </div>}
                </div>
                }
                        
            </div>
        )
    }
}
var mapState=(state)=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Search)