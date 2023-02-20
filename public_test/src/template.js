// creates function to make employee cards sortable
$(document).ready(function() {
  $("#sortable").sortable();
       $("#sortable").disableSelection();
});

// unhide the search input bar after user selects search from sidebar
$(".hamburger").on("click", function(){
  const homeButtonEl = document.querySelector('#home-button');
  const middleSectionEl = document.querySelector('.nav-middle-section');
  const rightSectionEl = document.querySelector('.nav-right-section');
  // const hideEl = document.querySelector('.hide');

  if(homeButtonEl.style.display !=="none") {
    homeButtonEl.style.display = "none";
    // rightSectionEl.style.display = "none";
    // hideEl.style.display = "none";
  } else {
    homeButtonEl.style.transition = "all 0.25s ease-in";
    window.setTimeout(function(){
      homeButtonEl.style.display = "inline";
    },500); //timed to match animation duration
    // rightSectionEl.style.display = "block";
    // hideEl.style.display = "flex";
    // searchBarEl.focus();
  }
})

// $(".hamburger").on("click", function(){
//   const navOptionsEl = document.querySelector('.nav-options');
//   const middleSectionEl = document.querySelector('.nav-middle-section');
//   const rightSectionEl = document.querySelector('.nav-right-section');
//   // const hideEl = document.querySelector('.hide');

//   if(middleSectionEl.style.display !=="none") {
//     middleSectionEl.style.display = "none";
//     rightSectionEl.style.display = "none";
//     // hideEl.style.display = "none";
//   } else {
//     window.setTimeout(function(){
//       // navOptionsEl.style.transition = "all 0.25s ease-in";
//       navOptionsEl.style.display = "flex";
//     },100); //timed to match animation duration
//     rightSectionEl.style.display = "block";
//     // hideEl.style.display = "flex";
//     // searchBarEl.focus();
//   }
// })