let maximo = 4;
let minimo = 1;
//let mensaje1;
//let mensaje2;
let contador = 1;
//let random = Math.floor((Math.random() * (maximo - minimo) + minimo));
//console.log(random);

/*const clave = setInterval(() =>{
    if(contador <=5 ){
        contador + contador;
    }else{
        clearInterval('click')
    }
},1000)
*/
const btnRestart = document.getElementById('restart');
const input = document.getElementById('input');
const countDown = document.getElementById('countdown');
const result = document.getElementById('resutl');

function juegoBomba () {
    startCoundown(5)
    const promesa1 = new Promise ((resolve) => {
        setTimeout(() => {
            let random = Math.floor((Math.random() * (maximo - minimo) + minimo));
            resolve(random)

        },5000);
    })
    return(promesa1)

}
function startCoundown(count){
    setInterval(() => {
        if(count >= 0){
            countDown.innerHTML = `Cuenta atras ${count} segundos`;
        }
    },1000);
}
juegoBomba().then(numero => {
    mensaje = ''
    if(numero == numeroSeleccionado) {
        mensaje = `
        <p>Has salvado al mundo</p>
        <p>Tu numero ${numeroSeleccionado} es el mismo que ${numero}</p>`
        
    } else {
        mensaje = `
        <p>La bomba ha estallado</p>
        <p>Tu numero ${numeroSeleccionado} es el mismo que ${numero}</p>`
    }
    result.innerHTML = mensaje
})
btnRestart.addEventListener('click', function() {
    location.reload()
})

/*const promesaMensaje1 = new Promise((resolve) => {
    setTimeout(() => {
        mensaje1 = 'Has salvado al mundo';
        resolve(mensaje1);
    },5000)
});
const promesaMensaje2 = new Promise ((resolve) => {
    setTimeout(() => {
        mensaje2 = 'La bomba ha estallado'
        resolve(mensaje2)
    },5000)
});*/














