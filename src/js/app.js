
let navigation = document.querySelector("#navigation").children[0];
let collapseBar = document.querySelector("#collapse_bar");
collapseBar.onclick = function () {
     if (window.outerWidth < 711) {
          if (navigation.style.height == `0px`) {
               navigation.style.height = `450px`;
          } else if (navigation.style.height = `450px`) {
               navigation.style.height = `0px`;
          }
     };
}
navigation.children[0].onclick = function () {
     if (window.outerWidth < 711) {
          navigation.style.height = `0px`;
     } else {
          navigation.children[0].children[0].classList.add("active");
          navigation.children[1].children[0].classList.remove("active");
          navigation.children[2].children[0].classList.remove("active");
          navigation.children[3].children[0].classList.remove("active");
     };
}
navigation.children[1].onclick = function () {
     if (window.outerWidth < 711) {
          navigation.style.height = `0px`;
     } else if (window.outerWidth > 711) {
          navigation.children[1].children[0].classList.add("active");
          navigation.children[0].children[0].classList.remove("active");
          navigation.children[2].children[0].classList.remove("active");
          navigation.children[3].children[0].classList.remove("active");
          navigation.children[4].children[0].classList.remove("active");
     };
}
navigation.children[2].onclick = function () {
     if (window.outerWidth < 711) {
          navigation.style.height = `0px`;
     } else if (window.outerWidth > 711) {
          navigation.children[2].children[0].classList.add("active");
          navigation.children[1].children[0].classList.remove("active");
          navigation.children[0].children[0].classList.remove("active");
          navigation.children[3].children[0].classList.remove("active");
          navigation.children[4].children[0].classList.remove("active");
     };
}
navigation.children[3].onclick = function () {
     if (window.outerWidth < 711) {
          navigation.style.height = `0px`;
     } else if (window.outerWidth > 711) {
          navigation.children[3].children[0].classList.add("active");
          navigation.children[1].children[0].classList.remove("active");
          navigation.children[2].children[0].classList.remove("active");
          navigation.children[0].children[0].classList.remove("active");
          navigation.children[4].children[0].classList.remove("active");
     };
}
navigation.children[4].onclick = function () {
     if (window.outerWidth < 711) {
          navigation.style.height = `0px`;
     } else if (window.outerWidth > 711) {
          navigation.children[4].children[0].classList.add("active");
          navigation.children[1].children[0].classList.remove("active");
          navigation.children[2].children[0].classList.remove("active");
          navigation.children[3].children[0].classList.remove("active");
          navigation.children[0].children[0].classList.remove("active");
     };
}


let contactBtn = document.querySelectorAll(".btn-contact");
let contactBody = document.querySelectorAll(".contact_body");


contactBtn[0].addEventListener("click", function contact(e) {
     contactBody[0].classList.toggle("contact-active");
});
contactBtn[1].addEventListener("click", function contact() {
     contactBody[1].classList.toggle("contact-active");
});

window.onclick = function (e) {
     if (!e.target.matches(".btn-contact")) {
          if (contactBody[0].classList.contains("contact-active")) {
               contactBody[0].classList.remove("contact-active");
          };
          if (contactBody[1].classList.contains("contact-active")) {
               contactBody[1].classList.remove("contact-active");
          };
     };

}

let copy = document.querySelector(".copy");
let email = document.querySelector(".email").innerText;
copy.onclick = function(){
     navigator.clipboard.writeText(email);
     alert("Email coppied " + email)
}



