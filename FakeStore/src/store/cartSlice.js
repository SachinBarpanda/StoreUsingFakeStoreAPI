import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers:{
        add:(state, action)=>{
            state.items.push(action.payload);
        } ,
        remove:(state, action)=>{
            state.items = state.items.filter(item=>item.id !==action.payload)
        },
        decrease : (state,action)=>{
            // if(action.payload.id == )
            state.items.splice(action.payload,1);
        }
    }
});
export const {add,remove, decrease} = cartSlice.actions;
export default cartSlice.reducer;