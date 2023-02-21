// creates function to make employee cards sortable
$(document).ready(function() {
  $("#sortable").sortable();
       $("#sortable").disableSelection();
});

// unhide the nav bar after user selects the hamburger menu
$(".hamburger").on("click", function(){
  const middleSectionEl = document.querySelector('.nav-middle-section');
  const rightSectionEl = document.querySelector('.nav-right-section');
  
  if(middleSectionEl.style.display !=="none") {
    middleSectionEl.style.display = "none";
    rightSectionEl.style.display = "none";    
  } else {
    window.setTimeout(function(){
      middleSectionEl.style.display = "inline";
      middleSectionEl.style.transition = "all 0.25s ease-in";
      rightSectionEl.style.display = "inline";
      rightSectionEl.style.transition = "all 0.25s ease-in";
    },100); //timed to match animation duration
  }
})