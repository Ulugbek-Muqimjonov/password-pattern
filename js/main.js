const elform = document.querySelector(".hero__form");
const elformInp = elform.querySelector(".hero__input");
const btn = document.querySelector(".hero__btn");
const line = document.querySelector(".hero__line");
const comment = document.querySelector(".hero__comment");
function counter(password) {
    let i = 0;
    if (/[A-Z]/.test(password) || /[0-9]/.test(password) || /[a-z]/.test(password) || /\W/.test(password)) {
        i = "weak";
    }
    if (/[a-z]/.test(password) && /[0-9]/.test(password) || /[a-z]/.test(password) && /\W/.test(password) || /[A-Z]/.test(password) && /[0-9]/.test(password) || /[A-Z]/.test(password) && /\W/.test(password) || /[A-Z]/.test(password) && /[a-z]/.test(password)) {
        i="medium";
    }
    if (/[a-z]/.test(password) && /[0-9]/.test(password) && /[A-Z]/.test(password)) {
        i= "strong";
    }
    if (/[a-z]/.test(password) && /[0-9]/.test(password) && /[A-Z]/.test(password) && /\W/.test(password)) {
        i= "strongest";
    }
    return i; 
}

elformInp.addEventListener("keyup",()=> {
    const inpvalue = elformInp.value;
     let lvalue = counter(inpvalue);
     console.log(lvalue);
    if ( lvalue == "weak") {
        comment.textContent = "This password is invalid";
        comment.classList.add("hero__weak-comment");
        comment.classList.remove("hero__medium-comment");
        comment.classList.remove("hero__strong-comment");
        comment.classList.remove("hero__stronger-comment");   
        line.classList.add("hero__weak");
        line.classList.remove("hero__medium")
        line.classList.remove("hero__strong")
        line.classList.remove("hero__stronger")
    }
    if (lvalue == "medium") {
        comment.textContent ="This password is not sufficient";
        comment.classList.remove("hero__weak-comment");
        comment.classList.add("hero__medium-comment");
        comment.classList.remove("hero__strong-comment");
        comment.classList.remove("hero__stronger-comment");
        line.classList.remove("hero__weak")
        line.classList.add("hero__medium")
        line.classList.remove("hero__strong")
        line.classList.remove("hero__stronger")
    }
    if (lvalue == "strong") {
        comment.textContent = "This password is strong";
        comment.classList.remove("hero__weak-comment");
        comment.classList.remove("hero__medium-comment");
        comment.classList.add("hero__strong-comment");
        comment.classList.remove("hero__stronger-comment");
        line.classList.remove("hero__weak")
        line.classList.remove("hero__medium")
        line.classList.add("hero__strong")
        line.classList.remove("hero__stronger")
    }
    if (lvalue == "strongest") {
        comment.textContent = "This password is very strong";
        comment.classList.remove("hero__weak-comment");
        comment.classList.remove("hero__medium-comment");
        comment.classList.remove("hero__strong-comment");
        comment.classList.add("hero__stronger-comment");
        line.classList.remove("hero__weak")
        line.classList.remove("hero__medium")
        line.classList.remove("hero__strong")
        line.classList.add("hero__stronger")
    }
})
btn.addEventListener("click",()=> {
     if (elformInp.type === "password") {
        
         elformInp.setAttribute("type","text")
     }else {
         elformInp.setAttribute("type","password")

     }
})
elform.addEventListener("submit",evt=> {
    evt.preventDefault();
})
