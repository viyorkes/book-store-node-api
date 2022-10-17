
import { IBookRepository } from "../../../repository/IBookRepository";


export class DeleteBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
  ) {}

  async execute(id) {


   const response = await this.bookRepository.findByIdAndDelete(id);
 
  }
}