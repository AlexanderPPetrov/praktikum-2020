const getRegisterData = () => {
    const email = document.getElementById("register-email").value;
    const password = document.getElementById("register-password").value;
    const country = document.getElementById("register-country").value;

    const userData = {
        email,
        password,
        country,
    }
    return userData;
}

const registerButton = document.getElementById("register-submit");

registerButton.addEventListener("click", () => {
    const userData = getRegisterData();
    console.log(userData)
})

const selectCountry = document.getElementById("register-country");

selectCountry.addEventListener("change", event => {
    console.log(event.target.value);
})

const toggleClassButton = document.getElementById("toggle-class");

toggleClassButton.addEventListener("click", () => {
    const elements = document.getElementsByClassName('icon-container');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if(element.classList.contains("bg-white")){
            element.classList.remove('bg-white');
            element.classList.add('bg-dark');
        }else{
            element.classList.remove('bg-dark');
            element.classList.add('bg-white');
        }
    }
})

