// creates function to make employee cards sortable
$(document).ready(function() {
  $("#sortable").sortable();
       $("#sortable").disableSelection();
});

// unhide the nav bar after user selects the hamburger menu
// $(".hamburger").on("click", function(){
//   const middleSectionEl = document.querySelector('.nav-middle-section');
//   const rightSectionEl = document.querySelector('.nav-right-section');
  
//   if(rightSectionEl.style.display !=="none") {
//     middleSectionEl.style.display = "none";
//     rightSectionEl.style.display = "none";    
//   } else {
//     window.setTimeout(function(){
//       middleSectionEl.style.display = "inline";
//       rightSectionEl.style.display = "inline";
//     },100); //timed to match animation duration
//   }
// })


// unhide the nav bar after user selects the hamburger menu
const openNavHandler = async (event) => {
  event.preventDefault();

  const middleSectionEl = document.querySelector('.nav-middle-section');
  const rightSectionEl = document.querySelector('.nav-right-section');

  if(rightSectionEl.style.display !=="none") {
    middleSectionEl.style.display = "none";
    rightSectionEl.style.display = "none";    
  } else {
    window.setTimeout(function(){
      middleSectionEl.style.display = "inline";
      rightSectionEl.style.display = "inline";
    },100); //timed to match animation duration
  }
};

document
  .querySelector('.hamburger')
  .addEventListener('click', openNavHandler);