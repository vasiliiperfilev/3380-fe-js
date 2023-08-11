import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Header = () => (
  <div className="col-md-12">
    <h2 className="display-4 text-center">Books List</h2>
  </div>
)

const Book = ({ _id, title, author, description, onDelete }) => (
  <div className="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div className="desc">
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
      <button className='delete-btn' onClick={() => onDelete(_id)}>X</button>
    </div>
  </div>
);

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get('https://be-final.onrender.com/')
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete('https://be-final.onrender.com/' + id)
      .then((response) => {
        console.log(response.data);
      });

    setBooks(books.filter((el) => el._id !== id));
  };

  return (
    <div className="BookList">
      <Header />
      <div className="col-md-11">
        <a className="btn btn-info float-right" href="/add"
          >+ Add New Book</a><br /><br />
        <hr />
      </div>
      <div className="list">
        {books.map((props) => <Book key={props._id} {...props} onDelete={deleteBook} />)}
      </div>
    </div>
  );
}
