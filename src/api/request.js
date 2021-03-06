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
export const checkCart=(gid,uid)=>{ //查询购物车中是否存在该商品
    return axios.get('/meizugoods/checkcart',{params:{gid,uid}})
}
export const addCart=(gid, num,uid)=>{ //添加商品到购物车
    return axios.post("/meizugoods/addcart",{gid, num,uid});
}
export const addNum=(gid,num,uid)=>{ //增加数量
    return axios.put("/meizugoods/addnum",{gid,num,uid});
}
export const cartList=(uid)=>{ //查询购物车
    return axios.get('/meizugoods/usercart',{params:{uid}})
}
export const cartData=(gid)=>{ //根据购物车gid获取商品数据
    return axios.get('/meizugoods/cartdata',{params:{gid}})
}
export const Delete=(gid)=>{
    return axios.delete(`/meizugoods/del/${gid}`);
}
export const search=(title)=>{ //根据title搜索
    return axios.get('/meizugoods/sw',{params:{title}})
}
export const token=(token)=>{ //根据title搜索
    return axios.get('/meizuuser/verify',{params:{token}})
}
