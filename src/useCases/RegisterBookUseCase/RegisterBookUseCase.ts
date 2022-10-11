import { IBookRepository } from "../../repository/IBookRepository";
import { IRegisterBookRequestDTO } from "./RegisterBookDTO";
import books  from "../../entity/book";

export class RegisterBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
  ) {}

  async execute(data: IRegisterBookRequestDTO) {

    const book = new books(data);

   const response = await this.bookRepository.registerBook(book);

  console.log(response)

 
  }
}