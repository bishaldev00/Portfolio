let navigation=document.querySelector("#navigation").children[0],collapseBar=document.querySelector("#collapse_bar");collapseBar.onclick=function(){window.outerWidth<711&&("0px"==navigation.style.height?navigation.style.height="450px":(navigation.style.height="450px")&&(navigation.style.height="0px"))},navigation.children[0].onclick=function(){window.outerWidth<711?navigation.style.height="0px":(navigation.children[0].children[0].classList.add("active"),navigation.children[1].children[0].classList.remove("active"),navigation.children[2].children[0].classList.remove("active"),navigation.children[3].children[0].classList.remove("active"))},navigation.children[1].onclick=function(){window.outerWidth<711?navigation.style.height="0px":window.outerWidth>711&&(navigation.children[1].children[0].classList.add("active"),navigation.children[0].children[0].classList.remove("active"),navigation.children[2].children[0].classList.remove("active"),navigation.children[3].children[0].classList.remove("active"),navigation.children[4].children[0].classList.remove("active"))},navigation.children[2].onclick=function(){window.outerWidth<711?navigation.style.height="0px":window.outerWidth>711&&(navigation.children[2].children[0].classList.add("active"),navigation.children[1].children[0].classList.remove("active"),navigation.children[0].children[0].classList.remove("active"),navigation.children[3].children[0].classList.remove("active"),navigation.children[4].children[0].classList.remove("active"))},navigation.children[3].onclick=function(){window.outerWidth<711?navigation.style.height="0px":window.outerWidth>711&&(navigation.children[3].children[0].classList.add("active"),navigation.children[1].children[0].classList.remove("active"),navigation.children[2].children[0].classList.remove("active"),navigation.children[0].children[0].classList.remove("active"),navigation.children[4].children[0].classList.remove("active"))},navigation.children[4].onclick=function(){window.outerWidth<711?navigation.style.height="0px":window.outerWidth>711&&(navigation.children[4].children[0].classList.add("active"),navigation.children[1].children[0].classList.remove("active"),navigation.children[2].children[0].classList.remove("active"),navigation.children[3].children[0].classList.remove("active"),navigation.children[0].children[0].classList.remove("active"))};let contactBtn=document.querySelectorAll(".btn-contact"),contactBody=document.querySelectorAll(".contact_body");contactBtn[0].addEventListener("click",(function(i){contactBody[0].classList.toggle("contact-active")})),contactBtn[1].addEventListener("click",(function(){contactBody[1].classList.toggle("contact-active")})),window.onclick=function(i){i.target.matches(".btn-contact")||(contactBody[0].classList.contains("contact-active")&&contactBody[0].classList.remove("contact-active"),contactBody[1].classList.contains("contact-active")&&contactBody[1].classList.remove("contact-active"))},navigator.clipboard.readText().then(document.querySelector(".email").innerText);