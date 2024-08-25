import express from "express";
import cors from "cors";
import { getCountryInfo } from "./controllers/country_info_controller";
const app = express();

app.use(cors());
app.use(express.json());

app.use(getCountryInfo)


app.listen(3002, () => {
  console.log("Servidor rodando em http://localhost:3002");
});
