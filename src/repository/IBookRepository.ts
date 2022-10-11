import books  from "../entity/book";

export interface IBookRepository {

  findAll(): Promise<any>;
  registerBook(book): Promise<void>;
}