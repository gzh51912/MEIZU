import axios from './index';  //进行了二次封装了

export const getList=(type)=>{ //四大列表页
    return axios.get('/type',{params:{type}})
}
export const getRec=(type)=>{ //推荐页列表
    return axios.get('/rec',{params:{type}})
}