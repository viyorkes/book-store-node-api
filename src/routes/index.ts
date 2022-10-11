import { Router } from "express";
import { registerBookController } from "../useCases/RegisterBookUseCase";
import { getBookController } from "../useCases/GetBookUseCase";

const router = Router()

router.post('/books', (request:any, response:any) => {
  return registerBookController.handle(request, response);
});

router.get('/books', (request:any, response:any) => {
  return getBookController.handle(request, response);
});

export { router }