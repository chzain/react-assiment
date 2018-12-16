const addProduct=(productDetils)=>{
    return {type:"ADD_PRODUCT",payload:productDetils};
   }
   
   const changeInProduct=(productDetils)=>{
       return {type:"CHANGE-IN-PRODUCT",payload:productDetils};
    }
    const removeProduct =(id)=>{
            return {type:"DELETE_PRODUCT",payload:id}
    }
    
    export {addProduct,changeInProduct,removeProduct}