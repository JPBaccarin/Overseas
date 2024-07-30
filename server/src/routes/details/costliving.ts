
import express, { Request, Response } from 'express';
import CostOfLiving  from '../../db/models/cost_living';

const CostLiving = express.Router();

CostLiving.get('/:id', async (req: Request, res: Response) => {
    const costLiving = await CostOfLiving.findAll({
        where: {
                country_id: req.params.country_id,
        }
    });
    res.json(costLiving);
});
export default CostLiving;
