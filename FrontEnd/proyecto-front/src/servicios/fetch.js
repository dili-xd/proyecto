async function posData(endpoint,obj) {
    try{
        const peticion=await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify(obj)    
        })
        const respuesta=await peticion.json()
        return respuesta
    } catch (error){
        console.error(error);

    }    
}
export {posData}