function getTime()
{
    const now = new Date()
    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2, "0");
    const second = String(now.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second}`;
}

const clock = document.querySelector("#clock")
getTime()
setInterval(getTime, 1000);