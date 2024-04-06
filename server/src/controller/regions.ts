import { Router } from "express";
import { PrismaService } from "../database";

const RegionsRouter = Router();

const prisma = PrismaService.getInstance();


RegionsRouter.get("/regions", async (req, res) => {

    try {
        const regions = await prisma.region.findMany({
            select: {
                id: true,
                state: true,
                district: true
            }
        });
        res.send(regions);
    } catch(error) {
        res.status(500).send(error);
    }
});

RegionsRouter.get("/regions/states", async (req, res) => {

    try {
        const regions = await prisma.region.findMany({
            select: {
                state: true,
            }
        });
        const states = regions.map(region => region.state);
        res.send(states);
    } catch(error) {
        res.status(500).send(error);
    }
});

export default RegionsRouter;