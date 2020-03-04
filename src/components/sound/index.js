import React, { Component } from 'react'
import {getList} from '../../api/request'

export default class Sound extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getData()
     }
     getData(){
         getList("声学").then((res)=>{
            // console.log(res);
            this.setState({
                list:res
            })
        })
     }
     render() {
        let {list} = this.state
        return (
            <div>
                {/* brand图 */}
                <div className="brand">
                <div className="brand-single">
                    <a className="brand-single-pic" href="https://detail.meizu.com/item/meizu16s.html">
                        <img className="" src="https://openfile.meizu.com/group1/M00/07/58/Cgbj0F1_MtWAGBY6AAIMTaHG4lI991.jpg"/>
                    </a>
                 </div>
                </div>
                {/* 渲染列表 */}
                <div className="phone-list">
                        {/* 列表 */}
                        {
                            list.map((item)=>{
                                return <div className="phone-content" key={item.id}>
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
            </div>
        )
    }
}
