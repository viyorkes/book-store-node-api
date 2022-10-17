import { MongoDbRepository } from "../repository/DB/MongodbRepository";
import { RegisterBookController } from "../useCases/RegisterBookUseCase/RegisterBookController";
import { RegisterBookUseCase } from "../useCases/RegisterBookUseCase/RegisterBookUseCase";


const mongoDbRepository = new MongoDbRepository();

const registerBookUseCase = new RegisterBookUseCase(
    mongoDbRepository

)

const registerBookController = new RegisterBookController(
  registerBookUseCase
)

export { registerBookUseCase, registerBookController }