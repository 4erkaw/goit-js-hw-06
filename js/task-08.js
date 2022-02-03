const refs = {
  submit: document.querySelector('button[type="submit"]'),
  login: document.querySelector(".login-form"),
};

const formSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email
    const password = e.target.elements.password
    if(!email.value.trim() || !password.value.trim()){
        alert(`All form fields must be filled!`)
        return
    } 
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData)
    refs.login.reset()
  };
  

refs.login.addEventListener("submit", formSubmit);


