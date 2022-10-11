import { IBookRepository } from "../../repository/IBookRepository";
import books  from "../../entity/book";

export class GetBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
  ) {}

  async execute() {

    const response = await this.bookRepository.findAll(); 

    console.log("heree2")

    console.log(response);

    console.log("heree2")

    return response;
  }
}