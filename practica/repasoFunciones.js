function calcularConsumo (edadActual, consumoPorDia, productos){
    if (edadActual < 30) {
       let cuenta = edadActual * consumoPorDia;
       return 'necesitaras ' + cuenta + ' de ' + productos + ' para que dure el resto de tu vida' 
   }
}
console.log(calcularConsumo(19,20,'leche'))

let ejemplo = ["mary", "Cata", "Luis"]

function cambiarElUltimo (array, dato){
    
    array.pop();
    array.push(dato);
    return array
}
console.log(cambiarElUltimo(ejemplo, 'Tony'))

let libro = {
    nombre: 'Un Reino en llamas',
    genero: 'fantasia',
    cantidadDePalabras: 55000,
    paraAdultos: false,

    describirse: function(){
        return nombre + ' ' + genero
    },

    puedeLeerlo: function(edad){
       if(edad<18 && this.paraAdultos==true){
           return false
       } else {
           return true }
    }
}
console.log(libro.puedeLeerlo(10))

function anios (edadPerro){
    let perrito= edadPerro * 7
    return 'tu perro tiene ' + perrito + ' anios perrunos'
}
console.log(anios(8))

function celsiusAFarenheit (temperatura){
     let grados = (temperatura * 1.8) + 32

     return temperatura + ' grados centigrados son ' + grados + ' Farenheit'
}
console.log(celsiusAFarenheit(9))

function farenheitACelsius (temperatura2){
    let grados2 = (temperatura2 - 32) / 1.8

    return temperatura2 + ' grados farenheit son ' + grados2 + ' centigrados'
}
console.log(farenheitACelsius(40))