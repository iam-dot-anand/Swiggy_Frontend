export const SIGNUP_REQUEST =(data)=>{
    console.log("action called",data);
    return {
        type:"SIGNUP_REQUEST",
        data
    }
}