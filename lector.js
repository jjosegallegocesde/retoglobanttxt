export async function leerArchivo(archivo){

    try{
        return await archivo.text();
    }catch(error){
        return error
    }

    
}