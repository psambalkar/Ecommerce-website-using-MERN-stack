import {API} from "../../backend"
//API means ;loacalhost:8000
export const signup=user=>{
    return fetch(
        `${API}/signup`,{
            method:"POST",
            headers:{
                ACCEPT:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(response=>{
            return response.json();
        })
        .catch(err=>console.log(err));
}
//helper is used to talking to backend and databases
export const signin=user=>{
    return fetch(
        `${API}/signin`,{
            method:"POST",
            headers:{
                ACCEPT:"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        })
        .then(response=>{
            return response.json();
        })
        .catch(err=>console.log(err));
}
export const authenticate=(data,next)=>{
    if(typeof window!=="undefined"){
        localStorage.setItem("jwt",JSON.stringify(data))
        next();
    }
}
export const signout=next=>{
    if(typeof window!=="undefined"){
        localStorage.removeItem("jwt");
      next();
      return fetch(`${API}/signout`,{
          method:"GET"
      })
      .then(response=>console.log("signout sucsess"))
       .catch(err=>console.log(err))
}};
export const isAuthenticated=()=>{
    if(typeof window==="undefined"){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    else{
        return false;
    }
};
