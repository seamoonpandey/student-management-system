import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Ts Server");
});

app.listen(port, () => {
  console.log(`[server]: Server s running at http://localhost:${port}`);
});
