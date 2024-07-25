const btn = document.getElementById("btn")
const inputEmail = document.getElementById('input-email')
const emailDanger = document.getElementById('email-danger')

btn.onclick = validForm

function validForm(e){
    e.preventDefault()

    // checkEmail
    checkEmail()
}

function checkEmail(){
    if(inputEmail.value === ""){
        // not valid
        
        inputEmail.style.border = "1px solid red"
        emailDanger.innerHTML = "ایمیل شما خالی است"
    }else{
        // valid
        
        
        emailDanger.innerHTML = ""
        inputEmail.style.border = "1px solid #eee"
    }
}