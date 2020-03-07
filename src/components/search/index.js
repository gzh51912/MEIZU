import React, { Component } from 'react'
import './search.min.css'
export default class search extends Component {
    goback=()=>{
        this.props.history.push("/top")
    }
    sw=()=>{
        console.log(this.node.value);
        
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
            </div>
        )
    }
}
