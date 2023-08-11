import React from 'react';
import axios from 'axios';

export default function BookForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    const book = {
      title: e.target.elements.title.value,
      author: e.target.elements.author.value,
      description: e.target.elements.description.value,
    }
    axios
      .post('https://be-final.onrender.com/', book)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
     <div className="CreateBook">
     <div className="container">
       <div className="row">
         <div className="col-md-8 m-auto">
           <br /><a className="btn btn-info float-left" href="/">Show BooK List</a>
         </div>
         <div className="col-md-8 m-auto">
           <h1 className="display-4 text-center">Add Book</h1>
           <p className="lead text-center">Create new book</p>
           <form onSubmit={onSubmit}>
             <div className="form-group">
               <input
                 type="text"
                 placeholder="Title of the Book"
                 name="title"
                 className="form-control"
                 spellCheck="false"
                 data-ms-editor="true"
                 required
               />
             </div>
             <div className="form-group">
               <input
                 type="text"
                 placeholder="Author"
                 name="author"
                 className="form-control"
                 spellCheck="false"
                 data-ms-editor="true"
                 required
               />
             </div>
             <div className="form-group">
               <input
                 type="text"
                 placeholder="Describe this book"
                 name="description"
                 className="form-control"
                 spellCheck="false"
                 data-ms-editor="true"
                 required
               />
             </div>
             <input type="submit" className="btn btn-info btn-block mt-4" />
           </form>
         </div>
       </div>
     </div>
   </div>
  );
}
