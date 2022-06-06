export function filtrarCarta(arreglo){

    let filtro=arreglo.map(function(elemento){
        return Number(elemento.split('\r')[0])
    })

    return filtro


}