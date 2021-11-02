//
//
//
//



// SHOW - Mostrar
// Esto lo q hace es: 
// seleccionamos el boton1 con el selector de jQuery $(".clase") y escuchamos el evento click sobre el btn1 (.on(click,)). y le decimos que cuando se haga click en el boton, seleccione el div box1 (con el selector de jQuery) y con el metodo .show() lo muestre ( el div box1 tenia display none. el metodo .show le cambia el display)

$(".btn1").on("click" , () =>{
    $(".box1").show()
})

// HIDE - Ocultar
$(".btn2").on("click" , () =>{
    $(".box1").hide()
})


// FADE IN - MOSTRAR CON TRANSICION
// Dentro de los parentesis del fadeIn() le podemos dar el tiempo de la transicion ( 1s = 1000)

$(".btn3").on("click" , () =>{
    $(".box1").fadeIn(2000)
})


// FADE OUT - OCULTAR CON TRANSICION
$(".btn4").on("click" , () =>{
    $(".box1").fadeOut(3000)
})

// SlideDown - MUESTRA DESLIZANDO HACIA ABAJO
$(".btn5").on("click" , () =>{
    $(".box1").slideDown(1000)
})

// SlideUp - OCULTA DESLIZANDO HACIA ARRIBA
$(".btn6").on("click" , () =>{
    $(".box1").slideUp(2000)
})