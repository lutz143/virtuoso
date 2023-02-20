// creates function to make employee cards sortable
$(document).ready(function() {
  $("#sortable").sortable();
       $("#sortable").disableSelection();
});

// unhide the search input bar after user selects search from sidebar
$(".hamburger").on("click", function(){
  const middleSectionEl = document.querySelector('.nav-middle-section');
  const rightSectionEl = document.querySelector('.nav-right-section');
  // const hideEl = document.querySelector('.hide');

  if(middleSectionEl.style.display !=="none") {
    middleSectionEl.style.display = "none";
    rightSectionEl.style.display = "none";
    // hideEl.style.display = "none";
  } else {
    middleSectionEl.style.display = "flex";
    rightSectionEl.style.display = "flex";
    // hideEl.style.display = "flex";
    // searchBarEl.focus();
  }
})