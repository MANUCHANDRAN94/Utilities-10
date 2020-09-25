const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    document.body.style.background= bagChange();
    console.log(bagChange())
})

function bagChange(){
    return `hsl( ${Math.floor(Math.random()*360)} , 100% , 50%)`;
}