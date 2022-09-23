const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    humburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


// const price = document.getElementById('price');
// const name = document.getElementById('name');
// const cNo = document.getElementById('c-no');
// const cvc = document.getElementById('cvc');
// const form = document.getElementById('form');


// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === '' || name.value == null){
//         messages.push('name is required')
//     }

//     if (messages.length > 0){
//         e.preventDefault()
//         errorElement.innerText = messages.join('')

//     }

// })

function payOn() {
  // document.getElementById('msg').innerHTML=`Payment Successful <br> <button>Go Back</button>`
  // document.getElementById('go').style.display="block"

  // msg.innerHTML = `
  // <h3>Payment Successful✌️ </h3>

  // `;

  alert("503 Service Unavailable");
  window.location = "./html/index.html";
}
