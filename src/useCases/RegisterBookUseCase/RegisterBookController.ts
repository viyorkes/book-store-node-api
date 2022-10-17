
import { RegisterBookUseCase } from "./RegisterBookUseCase";
import { Request, Response } from "express";



export class RegisterBookController {

  constructor(
    private registerBookUseCase: RegisterBookUseCase,
  ) {}



  async handle(request: Request, response: Response): Promise<Response> {
    const { title, author, publisher, numberOfPages } = request.body;

    try {
      await this.registerBookUseCase.execute({
        title,
        author,
        publisher,
        numberOfPages
      })
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}


