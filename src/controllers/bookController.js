import books from "../model/book.js"

class BookController {




  static booksList = (req, res) => {
      books.find()
          .exec((err, books) => {
              res.status(200).json(books)
          })
  }


}

export default BookController