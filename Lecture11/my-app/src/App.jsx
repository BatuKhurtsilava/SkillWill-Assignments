
import './App.css';
import React from 'react';


const books = [
  {
    bookName: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    characters: ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore"],
    shortIntro: "The first book in the iconic Harry Potter series, following the adventures of a young wizard, Harry Potter, and his friends at Hogwarts School of Witchcraft and Wizardry.",
    coverPhoto: "./imgs/potter.jpeg"
  },
  {
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    characters: ["Bilbo Baggins", "Gandalf", "Thorin Oakenshield", "Smaug"],
    shortIntro: "An enchanting fantasy novel that takes readers on an epic adventure with Bilbo Baggins as he joins a group of dwarves on a quest to reclaim their homeland from the fearsome dragon Smaug.",
    coverPhoto: "./imgs/hobit.jpeg"
  },
  {
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    characters: ["Elizabeth Bennet", "Mr. Darcy", "Jane Bennet", "Mr. Bingley"],
    shortIntro: "A classic novel centered around the romantic entanglements of the Bennet sisters, particularly the headstrong Elizabeth Bennet and the proud Mr. Darcy.",
    coverPhoto: "./imgs/Pride.jpeg"
  },
  {
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    characters: ["Jay Gatsby", "Nick Carraway", "Daisy Buchanan", "Tom Buchanan"],
    shortIntro: "Set in the Roaring Twenties, this novel follows the mysterious Jay Gatsby's obsession with the elusive Daisy Buchanan, weaving a tale of wealth, decadence, and unfulfilled dreams.",
    coverPhoto: "./imgs/gatsby.jpeg"
  }
];


function App() {
  const logger = function(title,characters) {
    console.log(`title: ${title} characters: ${characters}`)
  }
  return (
   books.map((book) => <ShowBook key = {book.author} logger = {logger} bookName = {book.bookName} author = {book.author} characters = {book.characters} shortIntro = {book.shortIntro} coverPhoto = {book.coverPhoto} />)
  )
}

function ShowBook({bookName, author, characters, shortIntro, coverPhoto, logger}) {
return(
  <div className='book-container'>
    <img src = {coverPhoto} alt = 'cover photos' className='book-cover'/>
    <p>{bookName}</p>
    <p>Main Characters: {characters.join(', ')}</p>
    <p>about: {shortIntro}</p>
    <button onClick={()=> logger(bookName, characters )}>Click to print to the console</button>
  </div>
)
}

export default App;