import { Router } from "express";
import { registerBookController } from "../useCases/RegisterBookUseCase";
import { getBookController } from "../useCases/GetBookUseCase";
import { updateBookController } from "../useCases/UpdateBookUseCase";
import { deleteBookController } from "../useCases/DeleteBookUseCase/UpdateBookUseCase";

const router = Router()

router.post('/books', (request:any, response:any) => {
  return registerBookController.handle(request, response);
});

router.get('/books', (request:any, response:any) => {
  return getBookController.handle(request, response);
});

router.put('/books/:id', (request:any, response:any) => {
  return updateBookController.handle(request, response);
});

router.delete('/books/:id', (request:any, response:any) => {
  return deleteBookController.handle(request, response);
});

export { router }