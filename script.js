let gmailId=document.querySelector('.mail');
let popup=document.querySelector('.notification');

function showMail(){
    popup.style.display="flex";
}

gmailId.addEventListener('click',()=>{
    showMail();
})