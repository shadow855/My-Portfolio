// contact btn function

function goBack() {
  var resetButton = document.getElementById("myForm").querySelector("input[type='reset']");
  resetButton.click();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 500);
}

// mailto js

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get the input values from the form
    var subject = document.getElementById("subject").value;
    var query = document.getElementById("query").value;
    
    // Compose the mailto URL with the pre-filled values
    var mailtoLink = "mailto:raiyanmushtaque@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(query);
    
    // Open the user's email client with the pre-filled values
    window.location.href = mailtoLink;
  });