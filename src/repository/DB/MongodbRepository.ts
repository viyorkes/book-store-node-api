
import { IBookRepository } from "../IBookRepository";
import  books from "../../entity/book";

export class MongoDbRepository implements IBookRepository {


  async findAll(): Promise<Object> {
  return books.find();
  }

  async findByIdAndUpdate(id,info): Promise<any> {

return books.findByIdAndUpdate(id, info)}

async findByIdAndDelete(id): Promise<any> {
  return books.findByIdAndDelete(id)}

  async registerBook(info): Promise<void> {
    let book = new books(info);
     book.save(info);
  }

}