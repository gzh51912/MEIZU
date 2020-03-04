import React, { Component } from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import './rec.min.css'
import {getRec} from '../../api/request'

export default class home extends Component {
    constructor(props){
        super(props)
        this.state={
            phone:[],
            sound:[],
            parts:[],
            life:[]
        }
    }
    componentDidMount(){
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

        //****** */
        this.getData()
    }
    getData(){
        getRec("推荐手机").then((res)=>{
           this.setState({
               phone:res
           })
       })
       getRec("推荐声学").then((res)=>{
           this.setState({
               sound:res
           })
       })
       getRec("推荐配件").then((res)=>{
           this.setState({
               parts:res
           })
       })
       getRec("推荐周边").then((res)=>{
           this.setState({
               life:res
           })
       })
    }
    
    render() {
        let  {phone,sound,parts,life} = this.state
        return (<div>
            {/* 轮播图 */}
            <div className="swiper-container">
                 <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/02/28/e1ef0740-7287-4285-a990-089d747a2327.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/02/25/3aa0fa9d-e0c4-48c6-a903-9d521f2ff9bf.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/02/21/8534d328-6594-40b2-a3bf-457180b46240.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/01/03/3da25eb6-38a2-48c0-8309-3db0c0d73266.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/02/26/ed4b54a7-be3c-44a0-9399-9bb4d5de64ff.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/02/05/a17ffb08-9e6d-44af-893f-e4c540ed6932.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/02/05/dd1d27b9-bd39-4cf9-94ee-e21e46f23ce6.jpg"/></div>
                    <div className="swiper-slide"><img src="https://fms.res.meizu.com/dms/2020/03/03/3bf12c60-5323-4c81-bda4-20cd08a61251.jpg"/></div>
                </div>
                 <div className="swiper-pagination" style={{width:"160%"}}></div>
            </div>

            <div className="main">
            {/* 轮播图下面的包邮 */}
                <div className="index-hot-tip" id="index-hot-tip">
                    <span className="icon" data-mtype="mgw_index_yl_service_1" data-bh="click_mgw_index_yl_service_1">
                <img src="https://fms.res.meizu.com/dms/2018/03/30/99f49dfe-25c2-485a-b7b3-8b63d6487b46.png" />魅族官方直供</span>
                <span className="icon" data-mtype="mgw_index_yl_service_2" data-bh="click_mgw_index_yl_service_2">
                <img src="https://fms.res.meizu.com/dms/2018/03/30/8f1252b1-3fb2-48e2-b992-1f38a9745314.png"/>满80免运费</span>
                <span className="icon" data-mtype="mgw_index_yl_service_3" data-bh="click_mgw_index_yl_service_3"><img src="https://fms.res.meizu.com/dms/2018/03/30/3924a1e1-5b4a-41de-9e79-ee904ec69d90.png"/>7 天无理由退货</span>
                </div>
            {/* 女王价到 */}
                <div className="index-hot-site" id="index-hot-site">
                    <div className="hot-site">
                        <ul>
                            <li><a href="https://hd.mall.meizu.com/sale/nvwangjie20.html" data-bh="click_mall_index_menu_1"
                                    data-mtype="mall_index_menu_1"><img
                                        src="https://fms.res.meizu.com/dms/2020/03/02/a1482d31-abe9-407a-8799-e235950689e3.png"/><span>女王价到         </span></a>
                            </li>
                            <li><a href="https://detail.mall.meizu.com/item/meizu16t.html" data-bh="click_mall_index_menu_2"
                                    data-mtype="mall_index_menu_2"><img
                                        src="https://fms.res.meizu.com/dms/2019/11/21/525ba08e-d608-426b-a857-beb035971043.png"/><span>魅族
                                        16T</span></a></li>
                            <li><a href="https://detail.mall.meizu.com/item/meizu16xs.html" data-bh="click_mall_index_menu_3"
                                    data-mtype="mall_index_menu_3"><img
                                        src="https://fms.res.meizu.com/dms/2020/03/02/1200da92-ee39-4574-b086-5a2f71970077.png"/><span>魅族
                                        16Xs</span></a></li>
                            <li><a href="http://mcycle.meizu.com/" data-bh="click_mall_index_menu_4"
                                    data-mtype="mall_index_menu_4"><img
                                        src="https://fms.res.meizu.com/dms/2019/04/28/552f6669-8652-4f78-a122-4866d2f7d25c.jpg"/><span>mCycle</         span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="index-banner" id="index-banner">
                    <div className="row">
                        <div className="banner-lg"><a href="https://detail.mall.meizu.com/item/meizu16t.html"
                                data-mtype="mall_index_ad_1" data-bh="click_mall_index_ad_1"><img
                                    src="https://fms.res.meizu.com/dms/2020/02/26/9a784ca2-b94c-49a6-a76d-184b1f481727.jpg"/></a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="banner-lg2"><a href="https://detail.meizu.com/item/meizu16spro.html" data-mtype="mall_index_ad_2"
                                data-bh="click_mall_index_ad_2"><img
                                    src="https://fms.res.meizu.com/dms/2020/02/24/cdf48e9a-816e-4375-9d84-7db966378e6e.png"/></a>
                        </div>
                        <div className="banner-lg2"><a href="https://detail.mall.meizu.com/item/meizuhd60.html"
                                data-mtype="mall_index_ad_3" data-bh="click_mall_index_ad_3"><img
                                    src="https://fms.res.meizu.com/dms/2020/03/02/97eb925d-4407-4334-98b7-d9ae47b740f0.png"/></a>
                        </div>
                    </div>
                </div>
            {/* 列表 */}
                <div className="phone">
                    <div className="title">
                        <h3>智能手机
                        <em></em>
                        </h3>
                    </div>
                    <div className="section-box-adv">
                        <a href="https://detail.mall.meizu.com/item/meizunote9.html" target="_blank" data-mtype="store_index_yl_1_1" data-bh="click_store_index_yl_1_1"><img className="lazy-img loaded-img" src="https://fms.res.meizu.com/dms/2020/02/05/8828c2e1-85c7-45d0-8fc1-f7d2d694f14e.jpg" alt="" data-src="https://fms.res.meizu.com/dms/2020/02/05/8828c2e1-85c7-45d0-8fc1-f7d2d694f14e.jpg" actived="actived"/></a>
                        </div>
                    <div className="phone-list">
                        {/* 手机 */}
                        {
                            phone.map((item)=>{
                                return <div className="phone-content" key={item.id}>
                       <img src={item.src}/>
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

                <div className="audio">
                <div className="title"><h3>魅族声学<em></em></h3></div>
                <div className="audio-ad">
                <div className="ad">
                <img src="https://fms.res.meizu.com/dms/2019/10/23/b2651b25-a85b-464b-8ff6-57106898e6c3.jpg"/>
                </div>
                <div className="adx">
                    <div>
                        <h4>魅族 HD60 头戴式蓝牙耳机</h4>
                        <p>40mm生物振膜 | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质<em></em></p>
                        <p className="price"><i>￥</i>449<em></em><s>￥499</s></p>
                    </div>
                </div>
                </div>
                <div className="audio-ad2">
                <div className="adx">
                    <div>
                        <h4>MEIZU UR 高端定制耳机 预约</h4>
                        <p>【预约专用】私人定制，为你而声</p>
                        <p className="price"><i>￥</i>200<em></em><s></s></p>
                    </div>
                </div>
                <div className="ad">
                <img src="https://fms.res.meizu.com/dms/2019/08/28/1cbca752-3b8f-4ddf-a20e-c6bbcbebc5fa.jpg"/>
                </div>
                </div>
                {/* 耳机列表 */}
                <div className="audio-list">
                        {/* 列表 */}
                        {
                            sound.map((item)=>{
                                return <div className="audio-content" key={item.id}>
                       <img src={item.src}/>
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
                {/* 配件 */}
                <div className="accessory">
                <div className="title"><h3>智能配件<em></em></h3></div>
                <div className="audio-ad">
                <div className="ad">
                <img src="https://fms.res.meizu.com/dms/2018/09/19/e1a6e477-23ab-4dd9-9931-be8a23745054.jpg"/>
                </div>
                <div className="adx">
                    <div>
                        <h4>魅族移动电源3</h4>
                        <p>双向快充双充电口 轻薄小巧</p>
                        <p  className="price"><i>￥</i>79<em></em><s></s></p>
                    </div>
                </div>
                </div>
                <div className="audio-ad2">
                <div className="adx">
                    <div>
                        <h4>魅族中国红Type-C金属编织线</h4>
                        <p>Type-C 接口 | 3A大电流 | 耐磨编织材料</p>
                        <p className="price"><i>￥</i>39<em></em><s></s></p>
                    </div>
                </div>
                <div className="ad">
                <img src="https://fms.res.meizu.com/dms/2020/01/12/5d82e5b0-bbc0-41c5-950e-a72b70105df6.jpg"/>
                </div>
                </div>
                {/* 耳机列表 */}
                <div className="audio-list">
                        {/* 列表 */}
                        {
                            parts.map((item)=>{
                                return <div className="audio-content" key={item.id}>
                        <img src={item.src}/>
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
                {/* 生活周边 */}
                <div className="house">
                <div className="title"><h3>生活周边<em></em></h3></div>
                <div className="audio-ad">
                <div className="ad">
                <img src="https://fms.res.meizu.com/dms/2020/01/13/651a0941-0bf1-4d15-a3b5-0a7f76894938.jpg"/>
                </div>
                <div className="adx">
                    <div>
                        <h4>Pandaer 鼠年圆领卫衣</h4>
                        <p>优质棉料 / 挺括亲肤 / 保暖舒适</p>
                        <p className="price"><i>￥</i>199<em></em><s></s></p>
                    </div>
                </div>
                </div>
                <div className="audio-ad2">
                <div className="adx">
                    <div>
                        <h4>魅族防飞溅声波电动牙刷</h4>
                        <p>智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航 </p>
                        <p className="price"><i>￥</i>269<em></em><s>￥299</s></p>
                    </div>
                </div>
                <div className="ad">
                <img src="https://fms.res.meizu.com/dms/2020/01/16/98f89845-0e70-4a3f-b9b9-2427d7927752.jpg"/>
                </div>
                </div>
                {/* 耳机列表 */}
                <div className="audio-list">
                        {/* 列表 */}
                       {
                            life.map((item)=>{
                                return <div className="audio-content" key={item.id}>
                        <img src={item.src}/>
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

            </div>



            </div>
        )
    }
}
