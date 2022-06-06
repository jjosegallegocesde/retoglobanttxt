export function filtrarPedidos(arreglo){

    let filtro=arreglo.map(function(elemento){
        
        return (elemento.slice(elemento.indexOf(',') + 1)).split("\r")[0]
    })

    return filtro


}