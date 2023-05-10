console.log('si');
window.addEventListener('load', () => {
    document.getElementById('principal').classList.add('animate__animated', 'animate__fadeInLeft');
    document.getElementById('principal').classList.remove('d-none');
});

// const elemento = document.getElementById("a_c3");
// console.log(elemento);

// elemento.addEventListener("click", function() {
//     console.log('c3')
//     document.getElementById('c3').scrollIntoView('true');
// });
function vista(elemento) {
    setTimeout(() => {
        console.log(elemento)
        elemento.scrollIntoView('true');
    }, 305);
}
// document.getElementById('a_c3').addEventListener('click', () => {
// });
// document.getElementById('a_c4').addEventListener('click', () => {
//     console.log('c4')
//     document.getElementById('c4').scrollIntoView('true');
// });
// document.getElementById('a_c5').addEventListener('click', () => {
//     console.log('c5')
//     document.getElementById('c5').scrollIntoView('true');
// });