// Loading animation hiding
function hideLoadingAnimation(image) {
  var loadingAnimation = image.previousElementSibling;
  loadingAnimation.style.display = 'none';
  image.style.opacity = 1;
}

// Image load delay
function delayImageLoad() {
  setTimeout(function() {
    var image = document.getElementById("library-image");
    var loader = document.getElementById("loader");
    image.onload = function() {
      image.classList.add("loaded");
      loader.style.display = "none";
    };
    image.src = "open-book.png"; 
    image.classList.remove("hidden");
    loader.classList.add("hidden");
  }, 1000);
}

// Login function
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var loginStatus = document.getElementById("login-status");

  if (username === "admin" && password === "password") {
    loginStatus.textContent = "Success!! Redirecting.....";
    loginStatus.classList.add("success");
    loginStatus.style.display = "block";
    setTimeout(function() {
      window.location.href = "books.html";
    }, 2000);
  } 
  else {
    loginStatus.textContent = "Invalid credentials!! Try Again.";
    loginStatus.style.color = "#ff0000";
    loginStatus.classList.add("error");
    loginStatus.style.display = "block";
    setTimeout(function() {
      loginStatus.style.display = "none";
    }, 4000);
  }

  return false;
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showPasswordCheckbox = document.getElementById("show-password");
  if (showPasswordCheckbox.checked) {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

// Book data
var books = [
  {
    name: "In Search of Lost Time",
    genre: "Fiction",
    author: "Marcel Proust",
    year: 1913,
    inStock: true
  },
  {
    name: "A Tale of Two Cities",
    genre: "Historical",
    author: "Charles Dickens",
    year: 1859,
    inStock: false
  },
  {
    name: "Harry Potter and the Philosopher's Stone",
    genre: "Fantasy",
    author: "J K Rowling",
    year: 1997,
    inStock: true
  },
  {
    name: "And Then There Were None",
    genre: "Mystery",
    author: "	Agatha Christie",
    year: 1939,
    inStock: false
  },
  {
    name: "The Hobbit",
    genre: "Fantasy",
    author: "J R R Tolkien",
    year: 1937,
    inStock: true
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    genre: "Fantasy",
    author: "J K Rowling",
    year: 2007,
    inStock: false
  },
  {
    name: "The Lion, the Witch and the Wardrobe",
    genre: "Fantasy",
    author: "C S Lewis",
    year: 1950,
    inStock: false
  },
  {
    name: "The Da Vinci Code",
    genre: "Mystery",
    author: "Dan Brown",
    year: 2003,
    inStock: false
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    genre: "Fantasy",
    author: "J K Rowling",
    year: 1998,
    inStock: true
  },
  {
    name: "The Lost Symbol",
    genre: "Fiction",
    author: "Dan Brown",
    year: 2009,
    inStock: false
  },
  {
    name: "The Girl with the Dragon Tattoo ",
    genre: "Fiction",
    author: "Stieg Larsson",
    year: 2005,
    inStock: true
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    genre: "Mystery",
    author: "J K Rowling",
    year: 1999,
    inStock: false
  },
  {
    name: "Ben-Hur: A Tale of the Christ",
    genre: "Historical",
    author: "Lew Wallace",
    year: 1880,
    inStock: true
  },
  {
    name: "The Ginger Man",
    genre: "Novel",
    author: "J P Donleavy",
    year: 1955,
    inStock: true
  },
  {
    name: "Jaws",
    genre: "Thriller",
    author: "Peter Benchley",
    year: 1974,
    inStock: true
  },
  {
    name: "Things Fall Apart",
    genre: "Novel",
    author: "Chinua Achebe",
    year: 1958,
    inStock: true
  },
  {
    name: "All the Light We Cannot See",
    genre: "Historical",
    author: "Anthony Doerr",
    year: 2014,
    inStock: false
  },
  {
    name: "Love Story",
    genre: "Romance",
    author: "Erich Segal",
    year: 1970,
    inStock: true
  },
  {
    name: "Harry Potter and the Order of the Phoenix",
    genre: "Fantasy",
    author: "J K Rowling",
    year: 2003,
    inStock: false
  },
  {
    name: "Valley of the Dolls",
    genre: "Novel",
    author: "Jacqueline Susann",
    year: 1966,
    inStock: true
  },
  {
    name: "War and Peace",
    genre: "Novel",
    author: "Leo Tolstoy",
    year: 1869,
    inStock: false
  },
  {
    name: "Mockingjay",
    genre: "Thriller",
    author: "Suzanne Collins",
    year: 2010,
    inStock: true
  },
  {
    name: "Dirt Creek",
    genre: "Mystery",
    author: "Hayley Scrivenor",
    year: 2022,
    inStock: true
  },
  {
    name: "Kane and Abel",
    genre: "Novel",
    author: "Jeffrey Archer",
    year: 1979,
    inStock: true
  },
  {
    name: "Fear of Flying",
    genre: "Romance",
    author: "Erica Jong",
    year: 1973,
    inStock: false
  },
  {
    name: "The Girl on the Train",
    genre: "Thriller",
    author: "Paula Hawkins",
    year: 2015,
    inStock: false
  },
  {
    name: "Gone with the Wind",
    genre: "Historical",
    author: "Margaret Mitchell",
    year: 1936,
    inStock: true
  },
  {
    name: "Angels & Demons",
    genre: "Thriller",
    author: "Dan Brown",
    year: 2000,
    inStock: true
  },
  {
    name: "Harry Potter and the Half-Blood Prince",
    genre: "Mystery",
    author: "J K Rowling",
    year: 2005,
    inStock: true
  },  
];

var originalBooks = books.slice();
var shoppingCart = [];

// Function to generate HTML for a book row in the table
function generateBookRow(book) {
  var stockStatus = book.inStock ? "In Stock" : "Out of Stock";
  var addToCartButton = book.inStock ? `<button class="add-to-cart" data-book="${book.name}">+</button>` : '';

  return `
    <tr>
      <td>${book.name}</td>
      <td>${book.genre}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td>${stockStatus}</td>
      <td>${addToCartButton}</td>
    </tr>
  `;
}

function addToCart(event) {
  alert("No further development has been done on this feature.\n!!  Apologies for the inconvenience  !!");
}

// Function to display the book list
function displayBooks(booksList) {
  var bookTableBody = document.getElementById("book-table-body");

  // Clear existing book rows
  bookTableBody.innerHTML = "";

  // Generate HTML for each book row and append to the table body
  booksList.forEach(function(book) {
    var bookRowHTML = generateBookRow(book);
    bookTableBody.innerHTML += bookRowHTML;
  });

  // Event listener to "Add to Cart" buttons
  var addToCartButtons = document.getElementsByClassName("add-to-cart");
  for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart);
  }
}

// Function to search for books
function searchBooks(event) {
  event.preventDefault();

  var searchInput = document.getElementById("search-input");
  var searchTerm = searchInput.value.toLowerCase();
  var filteredBooks = [];

  // Filtering the books based on the search term
  filteredBooks = originalBooks.filter(function(book) {
    return book.name.toLowerCase().includes(searchTerm) ||
           book.genre.toLowerCase().includes(searchTerm) ||
           book.author.toLowerCase().includes(searchTerm) ||
           book.year.toString().includes(searchTerm) ||
           (book.inStock && searchTerm === "in stock") ||
           (!book.inStock && searchTerm === "out of stock");
  });
  displayBooks(filteredBooks);
}

// Displaying the original book list when first visiting the page
displayBooks(originalBooks);

// Event listener for Enter key press
var searchForm = document.getElementById("search-form");
searchForm.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    searchBooks(event);
  }
});
