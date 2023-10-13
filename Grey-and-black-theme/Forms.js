let checkboxvalid = document.getElementById("checkbox1");
let submitBtn = document.getElementById("submit1");
checkboxvalid.addEventListener('click', (e) => {
    if (checkboxvalid.checked == true) {
        submitBtn.disabled = false;
        submitBtn.style.background = 'black';
    }
    else {
        submitBtn.style.background = 'grey';
        submitBtn.disabled = true;

    }
})
