
import { UpdateBookUseCase } from "./UpdateBookUseCase";
import { Request, Response } from "express";



export class UpdateBookController {

  constructor(
    private updateBookUseCase: UpdateBookUseCase,
  ) {}



  async handle(request: Request, response: Response): Promise<Response> {
    const { title, author, publisher, numberOfPages } = request.body;
    const id = request.params.id;

console.log(request.body)
console.log(id)

    try {
      await this.updateBookUseCase.execute({
        title,
        author,
        publisher,
        numberOfPages
      }, id )
  
      return response.status(200).send({message: 'update book success'}) 
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}


