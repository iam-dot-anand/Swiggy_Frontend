export const AddToCart =(data)=>{
    // console.log("action called",data);
    return {
        type:"AddToCart",
        data
    }
}
export const RemoveToCart =(id)=>{
    // console.log("action called",data);
    return {
        type:"RemoveToCart",
        id
    }
}
