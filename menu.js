let menu = document.getElementById("menu");
let menup = document.getElementById("menup");
let brk = document.getElementById("brk");
let brk1 = document.getElementById("brk1");
let brk2 = document.getElementById("brk2");
let brk3 = document.getElementById("brk3");
let brk4 = document.getElementById("brk4");
let lun = document.getElementById("lun");
let lun1 = document.getElementById("lun1");
let lun2 = document.getElementById("lun2");
let lun3 = document.getElementById("lun3");
let lun4 = document.getElementById("lun4");
let lun5 = document.getElementById("lun5");
let din = document.getElementById("din");
let din1 = document.getElementById("din1");
let din2 = document.getElementById("din2");
let din3 = document.getElementById("din3");

let all = document.getElementById("all");
let menu_wrapper = document.getElementById("menu-wrapper");
let reservation = document.getElementById("reservation");
let reservationp = document.getElementById("reservationp");

window.addEventListener("scroll", () => {
  menu.style.marginLeft = "0%";
  menu.style.opacity = "1";
  menup.style.opacity = "1";
  menup.style.transform = "scale(1)";

  menu_wrapper.style.opacity = "1";

  reservation.style.marginLeft = "0%";
  reservationp.style.transform = "scale(1)";
});

brk.addEventListener("click", () => {
  lun1.style.display = "none";
  lun2.style.display = "none";
  lun3.style.display = "none";
  lun4.style.display = "none";
  lun5.style.display = "none";
  din1.style.display = "none";
  din2.style.display = "none";
  din3.style.display = "none";
  brk1.style.display = "block";
  brk2.style.display = "block";
  brk3.style.display = "block";
  brk4.style.display = "block";

  brk.classList.add("active");
  all.classList.remove("active");
  din.classList.remove("active");
  lun.classList.remove("active");
});

lun.addEventListener("click", () => {
  brk1.style.display = "none";
  brk2.style.display = "none";
  brk3.style.display = "none";
  brk4.style.display = "none";
  din1.style.display = "none";
  din2.style.display = "none";
  din3.style.display = "none";
  lun1.style.display = "block";
  lun2.style.display = "block";
  lun3.style.display = "block";
  lun4.style.display = "block";
  lun5.style.display = "block";

  lun.classList.add("active");
  brk.classList.remove("active");
  din.classList.remove("active");
  all.classList.remove("active");
});

din.addEventListener("click", () => {
  brk1.style.display = "none";
  brk2.style.display = "none";
  brk3.style.display = "none";
  brk4.style.display = "none";
  lun1.style.display = "none";
  lun2.style.display = "none";
  lun3.style.display = "none";
  lun4.style.display = "none";
  lun5.style.display = "none";
  din1.style.display = "block";
  din2.style.display = "block";
  din3.style.display = "block";

  din.classList.add("active");
  brk.classList.remove("active");
  lun.classList.remove("active");
  all.classList.remove("active");
});

all.addEventListener("click", () => {
  brk1.style.display = "block";
  brk2.style.display = "block";
  brk3.style.display = "block";
  brk4.style.display = "block";
  din1.style.display = "block";
  din2.style.display = "block";
  din3.style.display = "block";
  lun1.style.display = "block";
  lun2.style.display = "block";
  lun3.style.display = "block";
  lun4.style.display = "block";
  lun5.style.display = "block";

  all.classList.add("active");
  brk.classList.remove("active");
  din.classList.remove("active");
  lun.classList.remove("active");
});

// reservation
document.getElementById("submit").addEventListener("click", function (event) {
  if (member.value !== "") {
    event.preventDefault();
    var tableNumber = Math.floor(Math.random() * 50) + 1;
    document.getElementById("tableNumber").innerText = tableNumber;

    member.value = "";
  } else {
    alert("Complete the details");
  }
});

// add to cart
