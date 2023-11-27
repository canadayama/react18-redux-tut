import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './Book';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
