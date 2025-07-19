const express = require("express");
const app = express();

// app.use('/user',(req,res)=>{
//     res.send({name:'Rohan'})
// })
app.use(express.json());
// app.get('/user',(req,res)=>{
//     res.send({name:'Rohan'})
// })
// app.post('/user',(req,res)=>{
//     console.log(req.body,typeof req.body)
//     res.send('I am post request')
// })

// get, post, patch, put, delete

let books = [
  { id: 1, name: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 2, name: "1984", author: "George Orwell" },
  { id: 3, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, name: "Pride and Prejudice", author: "Jane Austen" },
  {
    id: 5,
    name: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
  },
  { id: 6, name: "Moby‑Dick", author: "Herman Melville" },
  { id: 7, name: "Jane Eyre", author: "Charlotte Brontë" },
  { id: 8, name: "Beloved", author: "Toni Morrison" },
  { id: 9, name: "Anna Karenina", author: "Leo Tolstoy" },
  { id: 10, name: "Frankenstein", author: "Mary Shelley" },
];

// get all books
app.get("/books", (req, res) => {
  res.send(books);
});

// get book based on id
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.send(book);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.send("Book added successfully");
});

app.delete("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((book) => book.id !== id);

  res.send("Deleted successfully");
});
app.listen(4000, () => {
  console.log(`Listening on port 4000`);
});

// in app.use if initial string matches it will get inside that route, in this to work peoperly we have to reorder out route

// but in case of get post patch put and delete methods it wil match the entire path then only it will get into that route
