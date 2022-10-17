import { IBookRepository } from "../../repository/IBookRepository";
import { IUpdateBookRequestDTO } from "./UpdateBookDTO";

export class UpdateBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
  ) {}

  async execute(data: IUpdateBookRequestDTO, id) {


   const response = await this.bookRepository.findByIdAndUpdate(id, data);
 
  }
}