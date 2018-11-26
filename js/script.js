let btnReceive =document.querySelector('#receive'),
    btnChoose = document.querySelector('#choosee'),
    heading = document.getElementsByTagName('h2')[0],
    modal = document.querySelector('.modal'),
    btnClose = document.querySelector('.close'),
    inputName = document.querySelector('.contactform_name'),
    inputPhone = document.querySelector('.contactform_phone'),
    message = document.getElementsByName('message')[0];
//наведение
function hover() {
  heading.textContent = "Действительно Все!";
}
function out(){
  heading.textContent = "Все включено!";  
}
//модалки
function showModal(){
  modal.style.display = "block";
}
function closeModal(){
  modal.style.display = "none";
}
// инпуты
function inputText(){

}
heading.addEventListener('mouseenter',hover);
heading.addEventListener('mouseleave',out);

btnReceive.addEventListener('click',showModal);
btnClose.addEventListener('click',closeModal);

inputName.addEventListener("input", function() {
  message.value = "Меня зовут " + inputName.value +
  ". И я хочу спосить:";
  if(inputName.value == "") {
    message.value ="";
  }
});