import React, { Component } from 'react'
import './phone.min.css'
// import store from '../../store'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import {getList} from '../../api/request'

 class Phone extends Component {
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
         getList("手机").then((res)=>{
            this.setState({
                list:res
            })
        })
     }
     phone=(id)=>{
        this.props.phone(id)
        this.props.history.push("/details")
        
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

            </div>
        )
    }
}
var mapState=()=>{
    return{
        
    }
}
export default connect(mapState,actionCreator)(Phone)
// export default Phone