const usuario1 = prompt("Ingrese su nombre de usuario")

alert("Bienvenido " + usuario1)
console.log(usuario1)

let tomaDePedido = prompt("Si usted desea realizar un pedido de cajones por mayor, ingrese Si, de lo contrario ingrese No y lo dirigiremos a la pagina principal")

const valorCajon = Number(2500)
if (tomaDePedido == "Si" || tomaDePedido == "si")  {
    

    const cantidad = prompt("El precio de cada cajon de 28 plantines es de $2500. ingrese la cantidad que desea.")
    
    for(i = 1; i <=cantidad; i ++){

       

        let variedad = prompt("ingrese las variedades que desea. (una variedad por cajon) las variedades disponibles son: gazania, petunia, pensamiento, conejito, alelies, copetes.")
        console.log( usuario1 + " " + "encargo un cajon de " + variedad )   
         
    }

   
 function multiplicar (cantidad, valorCajon ){

    return cantidad * valorCajon
 }

 
        let resultado = multiplicar(cantidad,valorCajon)
    alert( "el total de su compra es: $" + resultado)

    const pagoTarjeta = Number(1.15)

    function recargo (resultado, pagoTarjeta){

        return resultado * pagoTarjeta

    }
    
    let formaDePago = prompt ("ingrese el metodo de pago deseado, recuerde que si abona con tarjeta, se le generara un recargo del 15 %, para efectivo ingrese efectivo y para tarjeta ingrese tarjeta")

    if(formaDePago  == "efectivo" || "Efectivo"){
        alert("se le enviara el pedido a la brevedad, el total es: $" + resultado)
    }else{
        
        let precioFinal = recargo(resultado,pagoTarjeta)

        alert("El cobro llegara a su tarjeta, el total es: $ " + precioFinal + " su pedido se enviara a la brevedad")

    }






}


