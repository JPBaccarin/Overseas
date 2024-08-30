import { Request, Response } from "express";
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
import Visas from "../db/models/visa";

export const getCountryData = async (req: Request, res: Response) => {
  const { countryId } = req.params;

  try {
    const country = await Country.findByPk(countryId, {
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
        { model: Visas },
      ],
    });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    console.error("Error fetching country data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
