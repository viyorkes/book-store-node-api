
import { GetBookUseCase } from "./GetBookUseCase";
import { Request, Response } from "express";


export class GetBookController {

  constructor(
    private getBookUseCase: GetBookUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {

    try {
  const booksList = await this.getBookUseCase.execute()
  return response.status(200).json(booksList)



    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}


