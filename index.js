const loinbtn=document.getElementById("btn");
const username=document.getElementById("username");
function display(event){
    const message=document.getElementById("result");
    message.textContent="log in sucessfully";
    message.classList.remove("hidden");
    message.classList.add("result");

}
loinbtn.addEventListener("click",display())