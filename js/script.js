const color = document.querySelector('#color');

color.addEventListener('input', function(){
    const colorChose = document.querySelector('#color').value; 
    document.getElementsByTagName("body")[0].style.backgroundColor = colorChose;
    document.getElementsByTagName("label")[0].style.backgroundColor = colorChose;
})