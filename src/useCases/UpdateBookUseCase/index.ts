import { MongoDbRepository } from "../../repository/DB/MongodbRepository";
import { UpdateBookController } from "./UpdateBookController";
import { UpdateBookUseCase } from "./UpdateBookUseCase";



const mongoDbRepository = new MongoDbRepository();

const updateBookUseCase = new UpdateBookUseCase(
    mongoDbRepository

)

const updateBookController = new UpdateBookController(
  updateBookUseCase
)

export { updateBookUseCase, updateBookController }