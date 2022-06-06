import {leerArchivo} from './lector.js'
import {filtrarCarta} from './filtrarCarta.js'
import {filtrarPedidos} from './filtrarPedidos.js'
import{calcularCostosPorMenu} from './costosMenu.js'

let menu=document.getElementById("menufile")
let pedido=document.getElementById("pedidosFile")
let boton=document.getElementById("boton")


menu.addEventListener("change",function(evento){

    leerArchivo(this.files[0])
    .then(function(respuesta){
        let menus=respuesta.split("\n")
        localStorage.setItem('menus',JSON.stringify(menus))
    })
})


pedido.addEventListener("change",function(evento){

    leerArchivo(this.files[0])
    .then(function(respuesta){
        let pedidos=respuesta.split("\n")
        localStorage.setItem('pedidos',JSON.stringify(pedidos))
    })
})


boton.addEventListener("click",function(event){

    event.preventDefault()

    let menus=JSON.parse(localStorage.getItem('menus').split(","))
    let pedidos=JSON.parse(localStorage.getItem('pedidos').split(","))


    let cartas=filtrarCarta(menus)
    cartas.shift()
    let cartaOficial=calcularCostosPorMenu(cartas)
    console.log(cartaOficial)
    
    
    console.log(filtrarPedidos(pedidos))
    


})

