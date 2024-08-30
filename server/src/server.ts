import express from "express";
import cors from "cors";
import country_id from "./routes/general/countryroute";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/country-details", country_id);

app.listen(3002, () => {
  console.log("Servidor rodando em http://localhost:3002");
});
