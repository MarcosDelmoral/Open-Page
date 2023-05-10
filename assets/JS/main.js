function main() {
    window.addEventListener('load', () => {
        document.getElementById('principal').classList.add('animate__animated', 'animate__fadeInLeft');
        document.getElementById('principal').classList.remove('d-none');
    });
};
function vista(elemento) {
    setTimeout(() => {
        console.log(elemento)
        elemento.scrollIntoView('true');
    }, 305);
};

main();