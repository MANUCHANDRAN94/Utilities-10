const container = document.getElementById('container');
const img = document.querySelector("img");


container.addEventListener("mouseover" , e=>{
    const x= e.clientX - e.target.offsetLeft/2;
    const y= e.clientY - e.target.offsetTop/2;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
})

container.addEventListener("mouseleave" , e=>{

    img.style.transformOrigin = `center center`;
    img.style.transform = "scale(1)";
})