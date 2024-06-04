// window.addEventListener('scroll', function () {
//     var scrollDiv1s = document.querySelectorAll('.scroll-div1');
//     var desc_div1 = document.querySelector('.flex-column-1');
//     var desc_div2 = document.querySelector('.flex-column-2');
//     var desc_div3 = document.querySelector('.flex-column-3');
//     var desc_div4 = document.querySelector('.flex-column-4');
  
//     scrollDiv1s.forEach(function (scrollDiv1) {
//       var scrollDivs = scrollDiv1.querySelectorAll('.scroll-div');
//       var scrollDiv1Position = scrollDiv1.getBoundingClientRect().top;
//       var windowHeight = window.innerHeight;
  
//       if (scrollDiv1Position < windowHeight && scrollDiv1Position > -scrollDiv1.offsetHeight) {
//         scrollDivs.forEach(function (scrollDiv) {
//           scrollDiv.style.display = 'flex';
//           desc_div1.style.flexDirection = 'column';
//           desc_div2.style.flexDirection = 'column';
//           desc_div3.style.flexDirection = 'column';
//           desc_div4.style.flexDirection = 'column';
//         });
//       }
//       //   else {
//       //     scrollDivs.forEach(function(scrollDiv) {
//       //       scrollDiv.style.display = 'none';
//       //     });
//       //   }
//     });
//   });


  var scrollDiv1s = document.querySelectorAll('.scroll-div1');
  var desc_div1 = document.querySelector('.flex-column-1');
    var desc_div2 = document.querySelector('.flex-column-2');
    var desc_div3 = document.querySelector('.flex-column-3');
    var desc_div4 = document.querySelector('.flex-column-4');

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
          desc_div3.style.flexDirection = 'column';
          desc_div4.style.flexDirection = 'column';
      });
    }
  });
}

window.addEventListener('DOMContentLoaded', handleScroll);
window.addEventListener('scroll', handleScroll);
