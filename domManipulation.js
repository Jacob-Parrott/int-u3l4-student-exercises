// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG

// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.

// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {
myName.innerHTML = "My name is Jacob Parrott"
myHobby.innerHTML = "I dont have a hobby"
myLocation.innerHTML = "I go to Nextech"
});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.

image1Button.addEventListener("click", function() {
image.src="https://picsum.photos/200";
});

// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.

image2Button.addEventListener("click", function() {
image.src="https://picsum.photos/200";
});

// BONUS
// 7. Try using different event types for your buttons.
