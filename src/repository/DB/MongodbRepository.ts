
import { IBookRepository } from "../IBookRepository";
import  books from "../../entity/book";

export class MongoDbRepository implements IBookRepository {


  async findAll(): Promise<Object> {
  return books.find();
  }

  async registerBook(info): Promise<void> {
    let book = new books(info);
     book.save(info);
  }

}