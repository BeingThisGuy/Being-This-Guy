// document.addEventListener("DOMContentLoaded", function() {
//   const searchInput = document.getElementById("searchInput");
//   const itemList = document.getElementById("itemList");
//   const items = Array.from(itemList.getElementsByClassName("badge"));

//   searchInput.addEventListener("input", function() {
//       const searchTerm = searchInput.value.toLowerCase();

//       const filteredItems = items.filter(item => {
//           const itemName = item.textContent.toLowerCase();
//           return itemName.includes(searchTerm);
//       });

//       updateList(filteredItems);
//   });

//   function updateList(filteredItems) {
//       itemList.innerHTML = "";

//       filteredItems.forEach(item => {
//           itemList.appendChild(item.cloneNode(true));
//       });
//   }
// });

// document.getElementById('searchInput').addEventListener('input', function () {
//   var searchValue = this.value.toLowerCase();
//   var divs = document.getElementsByClassName('searchable-div');

//   Array.from(divs).forEach(function (div) {
//       var content = div.textContent.toLowerCase();
//       if (content.includes(searchValue)) {
//           div.style.display = 'block';
//       } else {
//           div.style.display = 'none';
//       }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   // Select the search button and input
//   var searchButton = document.getElementById("searchButton");
//   var searchInput = document.getElementById("searchInput");

//   // Add click event listener to the search button
//   searchButton.addEventListener("click", function () {
//       // Get the search term from the input
//       var searchTerm = searchInput.value.toLowerCase();

//       // Select all custom blocks
//       var customBlocks = document.querySelectorAll(".custom-block");

//       // Iterate through each custom block
//       customBlocks.forEach(function (block) {
//           // Get the span element with class "badge" inside the current block
//           var spanElement = block.querySelector(".badge");

//           // Get the text content of the span (convert to lowercase for case-insensitive comparison)
//           var spanText = spanElement.textContent.toLowerCase();

//           // Check if the search term is present in the span text
//           if (spanText.includes(searchTerm)) {
//               // Show the block if the search term is present
//               block.style.display = "block";
//           } else {
//               // Hide the block if the search term is not present
//               block.style.display = "none";
//           }
//       });
//   });
// });


