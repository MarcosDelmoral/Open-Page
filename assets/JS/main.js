function main() {
    window.addEventListener('load', () => {
        document.getElementById('principal').classList.add('animate__animated', 'animate__fadeInLeft');
        document.getElementById('principal').classList.remove('d-none');
    });
};
function vista(elemento) {
    setTimeout(() => {
        console.log(elemento)
        document.getElementById(elemento).scrollIntoView('true');
    }, 380);
};



// Get the button:
let mybutton = document.getElementById("btntop");
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.remove('d-none');
        mybutton.classList.add('d-block');
        console.log('si')
      } else {
        mybutton.classList.remove('d-block');
        mybutton.classList.add('d-none');
        console.log('no')
      }
    }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



main();