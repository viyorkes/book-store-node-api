

import { Request, Response } from "express";
import { DeleteBookUseCase } from "./DeleteBookUseCase";



export class DeleteBookController {

  constructor(
    private deleteBookUseCase: DeleteBookUseCase,
  ) {}



  async handle(request: Request, response: Response): Promise<Response> {
    const { title, author, publisher, numberOfPages } = request.body;
    const id = request.params.id;

console.log(request.body)
console.log(id)

    try {
      await this.deleteBookUseCase.execute(id )
  
      return response.status(200).send({message: 'delete book success'}) 
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}


