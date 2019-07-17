
const  
myObj = [{ "name":"John", "age":30, "car":null },{ "name":"mia", "age":30, "car":null }];

  
  const reducer = (state = myObj, action) => {
    if (action.type === "UPDATE") {
      return [
        ...state,
        action.name
      ]
    }
    else if(action.type === "DELETE"){
      return [
        ...state.filter((filt)=>{
          if(filt.name!==action.name.name){
            return filt
          }
        }),
  
      ]
    }
  
    return state;
  };
  
  export default reducer;
  