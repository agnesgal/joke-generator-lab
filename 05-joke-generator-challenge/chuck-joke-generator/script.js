document.addEventListener('DOMContentLoaded', generateJoke);

// Add an event listener to the button
document.getElementById('joke-btn').addEventListener('click', generateJoke);

function generateJoke() {
  // Show 'Loading...' when the button is clicked
  document.getElementById('joke').innerHTML = 'Loading...';

  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set up the request with the URL and GET method
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  // Define the function to run when the request completes
  xhr.onreadystatechange = function () {
    // Check if the request is complete (readyState 4) and successful (status 200)
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Parse the JSON response
        const joke = JSON.parse(xhr.responseText).value;
        
        // Insert the joke into the HTML element
        document.getElementById('joke').innerHTML = joke;
      } else {
        // Display an error message if the request fails
        document.getElementById('joke').innerHTML = 'Oops! Something went wrong, please try again later.';
      }
    }
  };

  // Send the request
  xhr.send();
}
