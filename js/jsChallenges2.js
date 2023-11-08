function challenge2(element){
    let billing = document.querySelector("#bill");
    let home = document.querySelector("#home");
    if(element.checked){
        home.value = billing.value;
        home.disabled = true;
    }
    else{
        home.value = "";
        home.disabled = false;
    }
}

document.querySelector("#").addEventListener("click", challenge2)