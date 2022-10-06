import express from "express";
import BookController from "../controllers/BookController.js";

const router = express.Router();

router
    .get("/books", BookController.booksList)

export default router;