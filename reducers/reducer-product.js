
const productReducer = (state = [],action) =>{
    switch(action.type) {
        case "ADD_PRODUCT":
        let products = localStorage.getItem("Product")
products = JSON.parse(products);

        if(products === null){
            state.push(action.payload);
        }
        else
        state =[...products,action.payload]
        localStorage.setItem("Product",JSON.stringify(state));
        return state;
        case "CHANGE-IN-PRODUCT":
        let currentProduct = action.payload;
        let uId = currentProduct.currentId;
        delete  currentProduct.currentId;
        state[uId] =currentProduct;
        localStorage.setItem("Product",JSON.stringify(state));
        return state;
        case "DELETE_PRODUCT" :
        let id = action.payload;
        state.splice(id,1);
       localStorage.setItem("Product",JSON.stringify(state));
       return state;
        default: 
        let product = localStorage.getItem("Product")
       state = JSON.parse(product);
    if(state === null){
        state = [];
    }
        return state;
    }
}
export default productReducer;