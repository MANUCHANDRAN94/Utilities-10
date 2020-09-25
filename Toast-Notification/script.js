const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click" , function(){
    createNotification();
})

function createNotification(){
    const notify = document.createElement('div');

    notify.classList.add('toast');

    notify.innerText = "AHHAHAHAHAHHAHA"
    container.appendChild(notify);

    setTimeout(()=>{
        notify.remove()
    },2000)
}