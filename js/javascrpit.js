
// The title tester
  let textArea1 = document.querySelector('#input-titile-1');
  let h11 = document.querySelector('#title-show1');
  
  // Add an event listener to the text area that listens for the 'input' event
  textArea1.addEventListener('input', (event) => {
    // Update the contents of the h1 element with the value of the text area
    h11.textContent = event.target.value;
  }); 

  let textArea2 = document.querySelector('#input-titile-2');
  let h12 = document.querySelector('#title-show2');
  
  // Add an event listener to the text area that listens for the 'input' event
  textArea2.addEventListener('input', (event) => {
    // Update the contents of the h1 element with the value of the text area
    h12.textContent = event.target.value;
  }); 



// Thumbnail adder

// Get a reference to the input field and the div block
const inputField = document.querySelector('#input-thumbnail1');
const thumbnailShow = document.querySelector('#thumbnail-show1');

// Add an event listener to the input field to listen for when a file is selected
inputField.addEventListener('change', (event) => {
  // Get the selected file from the input field
  const file = event.target.files[0];

  // Create a new FileReader instance
  const reader = new FileReader();

  // Add an event listener to the FileReader instance to listen for when the file has been successfully read
  reader.addEventListener('load', () => {
    // Set the background-image property of the div block to the data URI of the image
    thumbnailShow.style.backgroundImage = `url(${reader.result})`;
  });

  // Read the contents of the file as a data URI
  reader.readAsDataURL(file);
});


const inputField2 = document.querySelector('#input-thumbnail2');
const thumbnailShow2 = document.querySelector('#thumbnail-show2');

// Add an event listener to the input field to listen for when a file is selected
inputField2.addEventListener('change', (event) => {
  // Get the selected file from the input field
  const file = event.target.files[0];

  // Create a new FileReader instance
  const reader = new FileReader();

  // Add an event listener to the FileReader instance to listen for when the file has been successfully read
  reader.addEventListener('load', () => {
    // Set the background-image property of the div block to the data URI of the image
    thumbnailShow2.style.backgroundImage = `url(${reader.result})`;
  });

  // Read the contents of the file as a data URI
  reader.readAsDataURL(file);
});


// priofle pic  adder




const intprofile1 = document.querySelector('#profile-pic-input1');
const showprofile1 = document.querySelector('#profile-pic-show1');

// Add an event listener to the input field to listen for when a file is selected
intprofile1.addEventListener('change', (event) => {
  // Get the selected file from the input field
  const file = event.target.files[0];

  // Create a new FileReader instance
  const reader = new FileReader();

  // Add an event listener to the FileReader instance to listen for when the file has been successfully read
  reader.addEventListener('load', () => {
    // Set the background-image property of the div block to the data URI of the image
    showprofile1.style.backgroundImage = `url(${reader.result})`;
    
  });

  // Read the contents of the file as a data URI
  reader.readAsDataURL(file);
});


const intprofile2 = document.querySelector('#profile-pic-input2');
const showprofile2 = document.querySelector('#profile-pic-show2');

// Add an event listener to the input field to listen for when a file is selected
intprofile2.addEventListener('change', (event) => {
  // Get the selected file from the input field
  const file = event.target.files[0];

  // Create a new FileReader instance
  const reader = new FileReader();

  // Add an event listener to the FileReader instance to listen for when the file has been successfully read
  reader.addEventListener('load', () => {
    // Set the background-image property of the div block to the data URI of the image
    showprofile2.style.backgroundImage = `url(${reader.result})`;
    
  });

  // Read the contents of the file as a data URI
  reader.readAsDataURL(file);
});



// Word counter

function updateLetterCount() {
  // Get the textarea with the id "input-title-1"

  // Count the number of characters in the text in the textarea
  var letterCount = textArea1.value.length;
  // Get the heading with the id "letterCount1"
  var letterCountHeading = document.getElementById("letterCount1");
  // Set the content of the heading to the value of letterCount
  letterCountHeading.textContent = `Characters: ${letterCount}`;
}

// Call the updateLetterCount function when the text in the textarea changes
document.getElementById("input-titile-1").addEventListener("input", updateLetterCount);




function updateLetterCount2() {
  // Get the textarea with the id "input-title-2"
  var textarea2 = document.getElementById("input-titile-2");

  // Count the number of characters in the text in the textarea
  var letterCount = textarea2.value.length;
  // Set the content of the heading to "Characters: " and letterCount
  var letterCountHeading = document.getElementById("letterCount2");
  // Sätt innehållet i headingen till "Letters: " och letterCount
  letterCountHeading.textContent = `Characters: ${letterCount}`;
}

// Call the updateLetterCount function when the text in the textarea changes
document.getElementById("input-titile-2").addEventListener("input", updateLetterCount2);