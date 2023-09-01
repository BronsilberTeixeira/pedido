const btn = document.querySelector(".no");
let positionx = 0;
let positiony = 0;

const moveButton = () => {
positionx = Math.random() * 200;
positiony = Math.random() * 200;
btn.style.transform = `translate(${positionx}px, ${positiony}px)`;
btn.style.transition = "all 0.2s ease";
};

btn.addEventListener("click", moveButton);
btn.addEventListener("mouseover", moveButton);


const sim = document.getElementById('yes');

sim.addEventListener("click", () => {

let timerInterval
Swal.fire({
 title: 'Obrigado 😍',
 html: 'Prometo lhe fazer feliz. 💘',
 timer: 4000,
 timerProgressBar: true,
 didOpen: () => {
Swal.showLoading()
const b = Swal.getHtmlContainer().querySelector('b')
timerInterval = setInterval(() => {
  b.textContent = Swal.getTimerLeft()
}, 100)
},
willClose: () => {
 clearInterval(timerInterval)
}
}).then((result) => {
/* Read more about handling dismissals below */
 if (result.dismiss === Swal.DismissReason.timer) {
console.log('I was closed by the timer')
}
})

});