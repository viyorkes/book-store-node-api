
import { IBookRepository } from "../../../repository/IBookRepository";
import { IUpdateBookRequestDTO } from "./DeleteBookDTO";


export class DeleteBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
  ) {}

  async execute(id) {


   const response = await this.bookRepository.findByIdAndDelete(id);
 
  }
}