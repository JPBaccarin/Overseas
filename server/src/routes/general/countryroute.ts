import { Router } from "express";
import express from "express";
import Country from "../../db/models/country";
import CostOfLiving from "../../db/models/cost_living";
import CultureAndLanguage from "../../db/models/culture_language";
import Documentation from "../../db/models/documentation";
import Education from "../../db/models/education";
import Healthcare from "../../db/models/healthcare";
import Housing from "../../db/models/housing";
import JobMarket from "../../db/models/job_market";
import Safety from "../../db/models/safety";
import SocialConnections from "../../db/models/social";
import Taxes from "../../db/models/taxes";
import Transportation from "../../db/models/transportation";
import Visa from "../../db/models/visa";

const country_id = express.Router();

country_id.get("/:country_id", async (req, res) => {
  const { country_id } = req.params;

  try {
    const countryData = await Country.findOne({
      where: { id: country_id },
      attributes: [
        "id",
        "name",
        "capital",
        "iso_code",
        "continent",
        "official_language",
        "currency",
        "population",
        "area",
      ],
      include: [
        {
          model: CostOfLiving,
          attributes: [
            "average_food_cost",
            "average_transportation_cost",
            "average_utilities_cost",
            "average_entertainment_cost",
          ],
        },
        {
          model: CultureAndLanguage,
          attributes: [
            "official_languages",
            "common_languages",
            "cultural_norms",
            "public_holidays",
          ],
        },
        {
          model: Documentation,
          attributes: [
            "required_documents",
            "registration_process",
            "document_issuance",
          ],
        },
        {
          model: Education,
          attributes: [
            "system_type",
            "average_cost",
            "top_schools",
            "university_admission_process",
            "language_requirements",
          ],
        },
        {
          model: Healthcare,
          attributes: [
            "system_type",
            "insurance_requirements",
            "average_cost",
            "hospitals_quality",
            "emergency_numbers",
          ],
        },
        {
          model: Housing,
          attributes: [
            "average_rent",
            "average_property_price",
            "popular_areas",
            "rental_process",
            "buying_process",
          ],
        },
        {
          model: JobMarket,
          attributes: [
            "major_industries",
            "average_salary",
            "unemployment_rate",
            "work_permit_requirements",
          ],
        },
        {
          model: Safety,
          attributes: [
            "crime_rate",
            "safety_tips",
            "emergency_contacts",
            "safe_areas",
          ],
        },
        {
          model: SocialConnections,
          attributes: ["expat_communities", "social_groups", "local_events"],
        },
        {
          model: Taxes,
          attributes: [
            "income_tax_rate",
            "sales_tax_rate",
            "property_tax_rate",
            "double_taxation_treaties",
            "tax_filing_process",
          ],
        },
        {
          model: Transportation,
          attributes: [
            "public_transportation",
            "average_cost",
            "driving_requirements",
            "ride_sharing_options",
          ],
        },
        {
          model: Visa,
          attributes: [
            "type",
            "requirements",
            "application_process",
            "processing_time",
            "cost",
            "validity",
          ],
        },
      ],
    });

    if (!countryData) {
      return res.status(404).json({ error: "Country not found" });
    }

    res.json(countryData);
  } catch (error) {
    console.error("Error fetching country data:", error);
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default country_id;
