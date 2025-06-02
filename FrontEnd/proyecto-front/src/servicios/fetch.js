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

async function getData(endpoint) {
    try{
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`)
        const respuesta = await peticion.json()
        return respuesta 
    } catch (error){
        console.log(error);
    }
    
}
export {getData}

async function patchData(obj,endpoint,id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}${id}/`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        })
        const respuesta = await peticion.json()
        console.log(respuesta);
        return respuesta
    } catch (error) {
        console.error(error);
    }
}
export {patchData}