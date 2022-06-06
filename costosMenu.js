export function calcularCostosPorMenu(menus){

    let cartaListado={}

    menus.forEach(function(plato,indice){

        //let llave='m'+indice
        cartaListado['m'+(indice+1)]=plato
        

    })

    return(cartaListado)


}