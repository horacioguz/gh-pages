
window.onscroll = function (e) {  
    var element = document.getElementById("mynav");
    if(scrollY >= 400){
        element.classList.remove("bg-transparent");
        element.classList.add("bg-dark");
    } else {
        element.classList.remove("bg-dark");
        element.classList.add("bg-transparent");
    }

    
} 

  

// Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Modal
var modalCard = document.getElementsByClassName('modal-card');
var buttonModal = document.getElementsByClassName('button-modal')

modalCard.addEventListener('shown.bs.modal', function () {
  button-modal.focus()
})
