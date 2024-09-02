import express from "express";
import cors from "cors";
import country_id from "./routes/general/countryroute";
import comparison from "./routes/general/comparisionroute";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/country-details", country_id);
app.use("/api/compare-countries", comparison);  // Adicionar a rota de comparação

app.listen(3002, () => {
  console.log("Servidor rodando em http://localhost:3002");
});
