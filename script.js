const books = 
[
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 10.99 },
    { title: "1984", author: "George Orwell", price: 8.99 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 12.5 },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 9.99 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.75 },
    { title: "Brave New World", author: "Aldous Huxley", price: 10.25 },
    { title: "Moby Dick", author: "Herman Melville", price: 13.49 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", price: 14.99 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 15.99 },
    { title: "War and Peace", author: "Leo Tolstoy", price: 18.5 }
];

function displayBooks()
{
    const bookList = document.getElementById("book-list");
    
  
    books.forEach((book, index) =>
    {
      const bookItem = document.createElement("div");
     
      bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> ${book.price.toFixed(2)}</p>
        <button onclick="buyBook(${index})" style = "background-color: dodgerblue">Add to cart</button>
        <hr>
      `;
      bookList.appendChild(bookItem);
    });
}

displayBooks();

function buyBook(index)
{
    const book = books[index];

    shoppingCart.push(book);

    alert(`You bought "${book.title}" by ${book.author} for ${book.price.toFixed(2)}!`);

    displayCart();
}

let shoppingCart = [];

function displayCart()
{
    const cartList = document.getElementById("cart-list");
    const cartCount = document.getElementById("cart-count");
    const totalPrice = document.getElementById("total-price");
    const clearButton = document.getElementById("clear-button");


    cartCount.textContent = `Items in Cart: ${shoppingCart.length}`;

    totalPrice.textContent = `Total: $${getTotalPrice()}`;

    cartList.innerHTML = "";

    shoppingCart.forEach((book, index) => 
    {
        const cartItem = document.createElement("div");

        cartItem.innerHTML = `
        <h4>${book.title}</h4>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> $${book.price.toFixed(2)}<button onclick="removefromcart(${index})" style = "background-color: dodgerblue">Remove</button></p>
        <hr>
       `;

       cartList.appendChild(cartItem);
    });

}

function clearCart()
{
    shoppingCart = [];
    displayCart();
    alert("Your shopping cart has been cleared")
}

function getTotalPrice()
{
    return shoppingCart.reduce((total, book) => 
    {
        return total + book.price;
    }, 0);
}

function removefromcart(index)
{
    shoppingCart.splice(index, 1);
    displayCart();
}






  
  