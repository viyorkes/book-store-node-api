import { MongoDbRepository } from "../../repository/DB/MongodbRepository";
import { GetBookController } from "./GetBookController";
import { GetBookUseCase } from "./GetBookUseCase";


const mongoDbRepository = new MongoDbRepository();

const getBookUseCase = new GetBookUseCase(
    mongoDbRepository
)

const getBookController = new GetBookController(
  getBookUseCase
)

export { getBookUseCase, getBookController }