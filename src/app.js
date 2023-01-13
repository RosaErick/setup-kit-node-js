import express from "express";
import Service from "./service/service.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const service = new Service();
  const result = service.helloWorld();

  res.send(result);
});

export default app;
