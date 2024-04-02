const btn = document.querySelector(".icon-arrow");

btn.addEventListener("click", validateInput);

function validateInput(){
    const input = document.querySelector("#email");
    console.log(input.value)
    if(/[\w+|\W]+@[\w+]+.(com)/.test(input.value)){
        input.value = ''
        input.style.outline = 'none'
    }else{
        input.style.outline = '1px solid red'
    }
}