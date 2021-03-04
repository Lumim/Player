let fetchApi={}
const host='http://localhost:8000/';
//const api_url=null,api_data=null,method_type = null;
 fetchApi.getApi= async (api_url,method_type,body_data=null,isApi,api_data=null)=>{
    var url;
    var token = localStorage.getItem('log_otp');
    var data;
    if(!api_data){
        url = `${host}`+`${api_url}`
    }
    else{
        url = `${host}`+`${api_url}`+`${api_data}`
    }
    if(isApi=1){
      data={
        'content-type':'application/json',
        'token':token,
      }
    }
    else{
      data={
        'content-type':'application/json',
      }
    }

    if(!body_data){
        const res = await fetch(url,{
			method: method_type,
			headers: data
		  });
          const data = await res.json()
          return data;
    }
    
    else{
        const res = await fetch(url,{
			method: method_type,
			headers: data,
		   
			body: JSON.stringify(body_data),
		  });
        
        const data = await res.json()
          return data;
    }
    
    
}
export default fetchApi;