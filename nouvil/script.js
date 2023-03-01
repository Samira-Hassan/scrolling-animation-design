let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain = document.getElementById('mountain');
let title = document.querySelector('.title');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value* 3+ 'px';
    // mountain.style.bottom = value + 'px';
    title.style.fontSize = value + 'px';
    if(scrollY >= 67){
        title.style.fontSize = 76 + 'px';
        title.style.position = 'fixed';
        if(scrollY >= 478){
            title.style.display = 'none'
        }else{
            title.style.display = 'block'

        }
    }
}