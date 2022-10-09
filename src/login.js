function checkLogin()
{
    const user = localStorage.getItem("user");
    // login 했음. 
    if(user)
    {
        greeting.innerText = `Hello ${user}`;
        greeting.classList.remove("hidden");
        loginForm.classList.add("hidden");
    } else 
    {
        greeting.classList.add("hidden");
        loginForm.classList.remove("hidden");
    }
}

function loginBtnHandler(event)
{
    event.preventDefault();
    localStorage.setItem("user", loginText.value);
    checkLogin();
}

const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("#login");
const loginText = document.querySelector("#loginText");
loginForm.addEventListener("submit", loginBtnHandler);

checkLogin();