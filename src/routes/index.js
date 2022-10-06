
import express from "express";
import book from "./bookRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "node application"})
    })

    app.use(
       express.json(),
       book
    )
}

export default routes