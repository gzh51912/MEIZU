import Rec   from '../components/rec'
import Phone from '../components/phone'
import Sound from '../components/sound'
import Parts from '../components/parts'
import Life  from '../components/life'
import Cart  from '../components/cart'
import Not  from '../components/not'
import Login from '../components/login'
import Top from '../components/top'
import Reg from '../components/reg'
export const routes=[
    {
        path:'/top',
        component:Top
    },{
        path:'/404',
        component:Not
    },{
        path:'/login',
        component:Login 
    },{
        path:'/reg',
        component:Reg 
    },{
        path:'/cart',
        component:Cart,
    }
]

export const subRoutes=[
    {
        path:'/top/rec',
        component:Rec,
        // roles:["csy","ccc"]
    },{
        path:'top/phone',
        component:Phone,
    },{
        path:'top/sound',
        component:Sound,
    },{
        path:'top/parts',
        component:Parts,
    },{
        path:'top/life',
        component:Life,
    }
]