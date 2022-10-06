import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router
    .get("/books", BookController.booksList)
    .post("/books", BookController.registerBook)
    .put("/books/:id", BookController.updateBook)

export default router;