gsap.from([".navbar", ".navbar-brand", ".active", ".nav-item"], {
  y: -60,
  duration: 1,
});

gsap.from(".d-flex", {
  x: 100,
  duration: 1,
});

gsap.to(".data1", {
  opacity: 1,
  duration: 1,
});

let dp1 = document.getElementById("dp1");
let dp1_1 = document.getElementById("dp1-1");
let data1 = document.getElementById("data1");
let co1 = document.querySelector(".co1");
let bu1 = document.getElementById("bu1");
let bu1_1 = document.getElementById("bu1-1");
let headline = document.getElementById("headline");

data1.addEventListener("mouseover", () => {
  data1.style.height = "50vh";
  data1.style.width = "50%";
  data1.style.borderRadius = "10px";
  data1.style.backgroundImage = "none";
  data1.style.backgroundColor = " rgba(0, 0, 0, 0.56)";
  data1.style.marginTop = "0%";
  data1.style.marginLeft = "0%";
  data1.style.boxShadow = "3px 3px 25px black";
  dp1.style.display = "block";
  dp1_1.style.display = "block";
  bu1.style.display = "block";
  bu1_1.style.display = "block";
  headline.style.display = "none";
});

data1.addEventListener("click", () => {
  data1.style.height = "25vh";
  data1.style.width = "13%";
  data1.style.borderRadius = "50%";
  data1.style.backgroundImage = "url(img/logo.png)";
  data1.style.backgroundColor = "white";
  data1.style.backgroundPositionX = "-4px";
  data1.style.right = "5%";
  data1.style.top = "2%";
  dp1.style.display = "none";
  dp1_1.style.display = "none";
  bu1.style.display = "none";
  bu1_1.style.display = "none";
  headline.style.display = "block";
});

setTimeout(() => {
  co1.style.backgroundImage =
    "url(https://www.marinabaysands.com/content/dam/marinabaysands/restaurant-landing/view-all/masthead.jpg)";
  co1.style.transition = "all 3s ease";
}, 4000);


setTimeout(() => {
  co1.style.backgroundImage =
    "url(https://assets.gqindia.com/photos/61b86d441279745aeb605a91/master/pass/top-image-04%20.jpg)";
  co1.style.backgroundSize = "cover";
}, 12000);
setTimeout(() => {
  co1.style.backgroundImage =
    "url(https://impeccabuild.com.au/wp-content/uploads/2020/10/Inexpensive-Restaurant-Design-Ideas-Restaurant-Fitouts-ImpeccaBuild-4-scaled.jpg))";
  co1.style.backgroundSize = "cover";
}, 18000);

// scroll

let res1 = document.getElementById("res1");
let res2 = document.getElementById("res2");
let res3 = document.getElementById("res3");
let res4 = document.getElementById("res4");

window.addEventListener("scroll", () => {
  res1.style.marginLeft = "2%";
  res1.style.opacity = "1";
  res3.style.marginLeft = "2%";
  res3.style.opacity = "1";
  res2.style.marginLeft = "2%";
  res2.style.opacity = "1";
  res4.style.marginLeft = "2%";
  res4.style.opacity = "1";
});

let ss = document.getElementById("ss");
window.addEventListener("scroll", () => {
  ss.style.opacity = 1;
  ss.style.marginLeft = "0%";
});

let subs = document.getElementById("subs");
let newsletter1 = document.getElementById("newsletter1");

subs.addEventListener("click", () => {
  if (newsletter1.value == "") {
    alert("Enter email to subscribe");
  } else {
    alert("Thank you for Subscribed");
  }
});



function setupCountdown(campaignSelector, startTimeMillis, endTimeMillis) {
 var second = 1000;
 var minute = second * 60;
 var hour = minute * 60;
 var day = hour * 24;

 function calculateRemaining() {
  var now = new Date().getTime();
  return now >= startTimeMillis && now < endTimeMillis ? endTimeMillis - now : 0;
 }

 var didRefresh = false;
 var previousGap = calculateRemaining();

 function countdown() {
  var gap = calculateRemaining();
  var shouldRefresh = previousGap > day && gap <= day || previousGap > 0 && gap === 0;

  previousGap = gap;

  var textDay = Math.floor(gap / day);
  var textHour = Math.floor((gap % day) / hour);
  var textMinute = Math.floor((gap % hour) / minute);
  var textSecond = Math.floor((gap % minute) / second);

  if (document.querySelector(campaignSelector + ' .timer')) {
   document.querySelector(campaignSelector + ' .day').innerText = textDay;
   document.querySelector(campaignSelector + ' .hour').innerText = textHour;
   document.querySelector(campaignSelector + ' .minute').innerText = textMinute;
   document.querySelector(campaignSelector + ' .second').innerText = textSecond;
  }

  if (shouldRefresh && !didRefresh) {
   didRefresh = true;
   setTimeout(function() {
    window.location.reload();
   }, 30000 + Math.random() * 90000);
  }
 }

 countdown();
 setInterval(countdown, 1000);
}

document.addEventListener("DOMContentLoaded", function(event) {
 if (!document.querySelectorAll || !document.body.classList) {
  return;
 }

});

setupCountdown(".campaign-0", 1705780800000, 1802649540000);

// 1705780800000 = Saturday 20 January 2024 20:00:00 (GMT)
// 1802649540000 = Sunday 14 February 2027 23:59:00 (GMT)