import { IBookRepository } from "../../repository/IBookRepository";


export class GetBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
  ) {}

  async execute() {

    const response = await this.bookRepository.findAll(); 

    return response;
  }
}