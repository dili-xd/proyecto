const TOKEN = localStorage.getItem('token') 

async function posData(endpoint,obj) {
    try{
        const peticion=await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization": `Bearer ${TOKEN}`
            },
            body:JSON.stringify(obj)    
        })
        const respuesta=await peticion.json()
        return respuesta
    } catch (error){
        console.error(error);

    }    
}
async function posUsuarios(endpoint,obj) {
    try{
        const peticion=await fetch(`http://127.0.0.1:8000/${endpoint}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)    
        })
        const respuesta=await peticion.json()
        return respuesta
    } catch (error){
        console.error(error);

    }    
}


async function getData(endpoint,id = '') {
    try{
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}`,{
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": `Bearer ${TOKEN}` // Añade el token de autorización
            }
        })


        const respuesta = await peticion.json()
        return respuesta 
    } catch (error){
        console.log(error);
    }
    
}


async function patchData(obj,endpoint,id) {
    try {
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}${id}/`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${TOKEN}` // Añade el token de autorización
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


async function deleteData(endpoint,id) {
    try{
        const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}${id}/`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}` // Añade el token de autorización
            }
        }
    )
    const respuesta = await peticion.json()
    console.log(respuesta)
    return respuesta
 }catch (error) {
        console.error(error);
    }   
}
export  {deleteData,posData,getData,patchData,posUsuarios}