import axios from 'axios';

var service = axios.create({
    baseURL:"/hd",  //所有的请求都会 带上 /api
    "content-type":"application/json",
    timeout:50000
})
// //请求拦截器
service.interceptors.request.use((config)=>{
    // console.log("发请求了 带上token")
    if(sessionStorage.getItem("token")){
        config.headers["token"]=sessionStorage.getItem("token")
    }
    return config;
})
// //响应拦截器
service.interceptors.response.use((res)=>{
   
   if(res.data.status===-1){ //token验证失败了
    window.location.href='/login';
    return;
   }
    return res.data
})

export default service;