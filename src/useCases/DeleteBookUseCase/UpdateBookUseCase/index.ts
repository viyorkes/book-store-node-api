import { MongoDbRepository } from "../../../repository/DB/MongodbRepository";
import { DeleteBookController } from "./DeleteBookController";
import { DeleteBookUseCase } from "./DeleteBookUseCase";





const mongoDbRepository = new MongoDbRepository();

const deleteBookUseCase = new DeleteBookUseCase(
    mongoDbRepository

)

const deleteBookController = new DeleteBookController(
  deleteBookUseCase
)

export { deleteBookUseCase, deleteBookController }