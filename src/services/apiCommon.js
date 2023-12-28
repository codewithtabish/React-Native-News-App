export const commonApiMethod=async(method,url,data=null,headers={})=>{
    try {
        let config={
            method: method,
        headers: {
         'Content-Type': 'application/json',
        ...headers,
        },
        

        }
        if(data!==null){
            config.body=JSON.stringify(data)
        }

        const response=await fetch(url,config)
        const responseData=await response.json()
        return responseData
     
    } catch (error) {
        console.log("The common Api method is ",error)
        
    }
}



export const commonApiImageMethod=async(method,url,data=null,headers={})=>{
   try {
     const config={
         headers:{
             ...headers,
         },
         method:method,
         body:data
        }
        console.log("The data is ",data)
     const response=await fetch(url,config)

     const lastResponse=await response.json()
     return lastResponse
   } catch (error) {
    console.log('The common api method error is ::',error)
    
   }
}

