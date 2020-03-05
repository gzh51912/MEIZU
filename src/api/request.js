import axios from './index';  //进行了二次封装了

export const getList=(type)=>{ //四大列表页
    return axios.get('/meizugoods/type',{params:{type}})
}
export const getRec=(type)=>{ //推荐页列表
    return axios.get('/meizugoods/rec',{params:{type}})
}
export const Checkname=(name)=>{ //查询帐户是否存在
    return axios.get('/meizuuser/checkname',{params:{name}})
}
export const Regto=(name,password)=>{ //注册
    return axios.post('/meizuuser/reg',{name,password})
}
export const loginto=(name,password)=>{ //登录
    return axios.get('/meizuuser/login',{params:{name,password}})
}
export const details=(id)=>{ //详情页
    return axios.get('/meizugoods/details',{params:{id}})
}