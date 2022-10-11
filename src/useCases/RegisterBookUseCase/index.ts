import { MongoDbRepository } from "../../repository/DB/MongodbRepository";
import { RegisterBookController } from "./registerBookController";
import { RegisterBookUseCase } from "./RegisterBookUseCase";




const mongoDbRepository = new MongoDbRepository();

const registerBookUseCase = new RegisterBookUseCase(
    mongoDbRepository

)

const registerBookController = new RegisterBookController(
  registerBookUseCase
)

export { registerBookUseCase, registerBookController }