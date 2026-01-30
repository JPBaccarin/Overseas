import fs from "fs";
import path from "path";
import Country from "../db/models/country";
import CostOfLiving from "../db/models/cost_living";
import CultureAndLanguage from "../db/models/culture_language";
import Documentation from "../db/models/documentation";
import Education from "../db/models/education";
import Healthcare from "../db/models/healthcare";
import Housing from "../db/models/housing";
import JobMarket from "../db/models/job_market";
import Safety from "../db/models/safety";
import SocialConnections from "../db/models/social";
import Taxes from "../db/models/taxes";
import Transportation from "../db/models/transportation";
import Visa from "../db/models/visa";
import sequelize from "../db/config";

async function exportData() {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados.");

    const countries = await Country.findAll({
      include: [
        { model: CostOfLiving },
        { model: CultureAndLanguage },
        { model: Documentation },
        { model: Education },
        { model: Healthcare },
        { model: Housing },
        { model: JobMarket },
        { model: Safety },
        { model: SocialConnections },
        { model: Taxes },
        { model: Transportation },
        { model: Visa },
      ],
    });

    const exportPath = path.join(
      __dirname,
      "../../../client/src/app/data/countries.json",
    );

    // Ensure directory exists
    const dir = path.dirname(exportPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(exportPath, JSON.stringify(countries, null, 2));
    console.log(`Dados exportados com sucesso para: ${exportPath}`);

    process.exit(0);
  } catch (error) {
    console.error("Erro ao exportar dados:", error);
    process.exit(1);
  }
}

exportData();
