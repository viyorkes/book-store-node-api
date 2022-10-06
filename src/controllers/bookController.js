import books from "../model/book.js"

class BookController {




  static booksList = (req, res) => {
      books.find()
          .exec((err, books) => {
              res.status(200).json(books)
          })
  }


  static registerBook= (req, res) => {
    let book = new books(req.body);

    book.save((err) => {

      if(err) {
          res.status(500).send({message: `${err.message} - fail to register book`})
      } else {
        res.status(201).send(book.toJSON())
      }
    })
}


static updateBook = (req, res) => {
  const id = req.params.id;

  books.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
      if(!err) {
          res.status(200).send({message: 'update book success'})
      } else {
          res.status(500).send({message: err.message})
      }
  })
}


static deleteBook = (req, res) => {
  const id = req.params.id;

  books.findByIdAndDelete(id, (err) => {
      if(!err){
          res.status(200).send({message: 'success to delete'})
      } else {
          res.status(500).send({message: err.message})
      }
  })
}


}

export default BookController