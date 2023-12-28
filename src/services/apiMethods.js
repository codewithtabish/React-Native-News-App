import { commonApiImageMethod, commonApiMethod } from "./apiCommon"
import { BaseURL } from "./helper"

export const signupUser=async(data)=>{
    try {
       
        const response=await commonApiMethod('POST',`${BaseURL}/user/signup`,data)
     
        return response

        
    } catch (error) {
        console.log('The signup error is ',error)
        
    }

}



export const verifyUserMethod=async(data)=>{
    try {
        const response=await commonApiMethod('POST',`${BaseURL}/user/verify`,data)
        // const {}=req.body
        return response
        
    } catch (error) {
        console.log("Apo verify user error is ",error)
        
    }
}


export const allUsers=async()=>{
    const response=await commonApiMethod('GET',`${BaseURL}/user`)
    return response


}



export const loginUser=async(data)=>{
    const response=await commonApiMethod('POST',`${BaseURL}/user/login`,data)
    return response

}







export const getLoginUserData=async(header)=>{
   const response=await commonApiMethod('GET',`${BaseURL}/user/me`,null,header)
   return response
}


// FOR POST API METHOD 

export const getAllPosts=async()=>{
    const response=await commonApiMethod('GET',`${BaseURL}/post/posts`)

    return response
}


export const createPost=async(data,headers)=>{
    const response=await commonApiMethod('POST',`${BaseURL}/post/createPost`,data,headers)
    return response

}


// TRIGGER ACTION ON POST

export const triggedActionPost=async(token,id,obj)=>{
    const response=await fetch(`${BaseURL}/post/triggerPost/${id}`,{
        method:"PUT",
        headers:{
            Authorization: `Bearer ${token}`,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })

    const lastResponse=await response.json()
    return lastResponse

}


// FIRST PROFILE PICTURE
export const firstProfilePicture=async(data,header)=>{
 const response=await commonApiImageMethod('PUT',`${BaseURL}/user/firstPic`,data,header)

 return response

}