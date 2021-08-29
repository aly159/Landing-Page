/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let elements = document.querySelectorAll(".section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

//create nav link corresponding to each section and append it to the navContainer
var counter = 0;
elements.forEach((element) => {
  var nav_bar = document.querySelector(".nav_bar");
  //console.log(nav_bar);
  var link = document.createElement("a");
  link.classList.add("nav_section");
  if (counter == 0) {
    link.classList.add("active");
    counter++;
  }
  var section_name = element.getAttribute("data-nav");
  link.innerHTML = section_name;
  // console.log(link);
  nav_bar.appendChild(link);
});

// Add class 'active' to section when near top of viewport
function ActiveChange(elementN) {
  ActiveNav = document.querySelector(".active");
  ActiveNav.classList.remove("active");
  navigator[elementN].classList.add("active");
  ActiveSection = document.querySelector(".active-class");
  ActiveSection.classList.remove("active-class");
  elements[elementN].classList.add("active-class");
}
function intersectionCheck(element) {
  const rectangle = element.getBoundingClientRect();
  //console.log(rectangle.bottom);
  //console.log("----------------");
  //console.log(window.innerHeight);
  // console.log("-----------------------------------------");
  return (
    // rectangle.top >= 0 &&
    //rectangle.left >= 0 &&
    rectangle.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rectangle.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
//function clickLink ()
//{

let navigator = document.querySelectorAll(".nav_section");
for (let i = 0; i < navigator.length; i++) {
  //console.log("hello");
  navigator[i].addEventListener("click", function () {
    elements[i].scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    ActiveChange(i);
  });
  addEventListener("scroll", function () {
    if (intersectionCheck(elements[i])) {
      console.log("intersection");
      ActiveChange(i);
    }
  });
}

//}
// Set sections as active
