import express from "express";
import cors from "cors";
import surfitScrape from "./scrapping/surfit-scrape";
import { createServer } from "http";
// import { parser } from "./jsonParser/parser";
const nearley = require("nearley");
import { default as grammar } from "../src/jsonParser/grammar";

const app = express();
const server = createServer(app);
const router = express.Router();
const port = 3100;

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"], // 접근 권한을 부여하는 도메인
    credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가해줌
    optionsSuccessStatus: 200, // 응답 상태 200으로 설정
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  res.send(parser.feed(`[true,"hello"]`).results);
});

app.get("/tag", (req, res) => {
  const tag = req.query.tag as string;
  surfitScrape(tag).then((result) => {
    res.send(JSON.stringify(result));
  });
});

app.post("/", (req, res) => {
  console.log(req.body.input);
  const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
  try {
    res.send(parser.feed(req.body.input).results);
  } catch (parseError: any) {
    res
      .status(400)
      .send(SyntaxError("Error at character " + parseError.offset));
  }
});

// console.log(parser.feed("[true]"));

server.listen(port, () => {
  console.log("Server listening on port " + port);
});
