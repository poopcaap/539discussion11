function challenge1(element){
    let emailStyle = document.querySelector("#emailDiv");
    if (element.checked) {
        emailStyle.style.display = "block";
    }
    else{
        emailStyle.style.display = "none";
    }
    console.log(element);
}