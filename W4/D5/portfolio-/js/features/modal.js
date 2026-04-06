function initModal(){
    const modal = document.getElementById("contact-modal");
    const modalContent = document.getElementById("modal-content");
    const modalTrigger = document.getElementById("modal-trigger");
    const modalClose =  document.getElementById("modal-close")
    const formCancel = document.getElementById("form-cancel");
  if(!modal || !modalContent || !modalTrigger || !modalClose || !formCancel){
    console.log("Modal elements not found");
    return;
  }
  function openModal(){
    modal.classList.remove("hidden");

    setTimeout(function(){
        modalContent.classList.remove("scale-95","opacity-0");},10);
  }
  function  closeModal(){
    modalContent.classList.add("scale-95","opacity-0");
    setTimeout(function(){
        modal.classList.add("hidden");},200);
  }
  modalTrigger.addEventListener("click",openModal);
  modalClose.addEventListener("click",closeModal);
  formCancel.addEventListener("click",closeModal);

  //close when clicking on backdrop
  modal.addEventListener("click",function(event){
    if(event.target===modal){
        closeModal();

    }
  });
  console.log("Modal opened successfully");
}