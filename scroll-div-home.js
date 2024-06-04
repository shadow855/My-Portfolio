// window.addEventListener('scroll', function() {
//     var scrollDivs = document.querySelectorAll('.scroll-div');

//     scrollDivs.forEach(function(scrollDiv) {
//       var scrollDivPosition = scrollDiv.getBoundingClientRect().top;
//       var windowHeight = window.innerHeight;

//       if (scrollDivPosition < windowHeight) {
//         scrollDiv.style.display = 'flex';
//       }
//     });
//   });

// fghjk,.

//   window.addEventListener('scroll', function() {
//   var scrollDivs = document.querySelectorAll('.scroll-div');
//   var scrollDiv1 = document.querySelector('.scroll-div1');

//   var scrollDiv1Position = scrollDiv1.getBoundingClientRect().top;
//   var windowHeight = window.innerHeight;

//   if (scrollDiv1Position < windowHeight) {
//     scrollDivs.forEach(function(scrollDiv) {
//       scrollDiv.style.display = 'flex';
//     });
//   }
// });


// bubncjn

// window.addEventListener('scroll', function () {
//   var scrollDiv1s = document.querySelectorAll('.scroll-div1');
//   var desc_div1 = document.querySelector('.work-1-desc-points-div');
//   var desc_div2 = document.querySelector('.work-2-desc-points-div');

//   scrollDiv1s.forEach(function (scrollDiv1) {
//     var scrollDivs = scrollDiv1.querySelectorAll('.scroll-div');
//     var scrollDiv1Position = scrollDiv1.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;

//     if (scrollDiv1Position < windowHeight) {
//       scrollDivs.forEach(function (scrollDiv) {
//         scrollDiv.style.display = 'flex';
//         desc_div1.style.flexDirection = 'column';
//         desc_div2.style.flexDirection = 'column';
//       });
//     }
//     //   else {
//     //     scrollDivs.forEach(function(scrollDiv) {
//     //       scrollDiv.style.display = 'none';
//     //     });
//     //   }
//   });
// });

// contact btn function

function goToContact() {
  window.location.href = "contact.html";
}


// scroll js


var scrollDiv1s = document.querySelectorAll('.scroll-div1');
var desc_div1 = document.querySelector('.work-1-desc-points-div');
  var desc_div2 = document.querySelector('.work-2-desc-points-div');

function handleScroll() {
  var windowHeight = window.innerHeight;

  scrollDiv1s.forEach(function (scrollDiv1) {
    var scrollDivs = scrollDiv1.querySelectorAll('.scroll-div');
    var scrollDiv1Position = scrollDiv1.getBoundingClientRect().top;

    if (scrollDiv1Position < windowHeight && scrollDiv1Position > -scrollDiv1.offsetHeight) {
      scrollDivs.forEach(function (scrollDiv) {
        scrollDiv.style.display = 'flex';
        desc_div1.style.flexDirection = 'column';
        desc_div2.style.flexDirection = 'column';
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);
