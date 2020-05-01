export const authReducer= (state, action) => {
    switch(action.type){
        case "LOGIN":
            localStorage.setItem('user',JSON.stringify(action.payload.user))
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            console.log('dispatched login',action.payload.user);
          return{
              ...state,
              isAuthenticated:true,
              user:action.payload.user,
              token:action.payload.token
          };
        
        case "LOGOUT":
            console.log('dispatched logout');
            localStorage.clear();
            return{
                ...state,
                isAuthenticated:false,
                user:null,
                token:null
            };
          
            default:
                return state;
    }
} 