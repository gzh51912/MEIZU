import React, { Component } from 'react'
import './phone.min.css'
// import store from '../../store'
import actionCreator from '../../store/actionCreator';
import {connect} from 'react-redux';
import axios from 'axios'
 class Phone extends Component {
     constructor(props){
         super(props)
         this.state={
             list:[]
         }
         window.document.title="手机-魅族官网"
     }
     componentDidMount(){
        this.getData()
     }
     getData(){
        let type="手机"
        axios.get('http://47.113.120.143:5555/meizugoods/type',{params:{type}}).then((res)=>{
            this.setState({
                list:res.data
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
                    <a className="brand-single-pic" >
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