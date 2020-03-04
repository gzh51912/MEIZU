import axios from 'axios'
const initialState = {
    list: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case "PHONE":
            var newState = JSON.parse(JSON.stringify(state))
            var type="手机"
            // axios.get(`http://localhost:5555/meizugoods/type?type=${type}`).then((res)=>{
            //   newState=res.data  
            //   console.log(newState);
              
            // })
            // console.log(newState);
            // var aa=newState 
            // console.log(aa);
            
            return newState;

        case "SOUND":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;
        case "PARTS":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;
        case "LIFE":
            var newState = JSON.parse(JSON.stringify(state))

            return newState;

        default:
            return state
    }
}