import { Router } from "express";
import { PrismaService } from "../database";

const RegionsRouter = Router();

const prisma = PrismaService.getInstance();


RegionsRouter.get("/", async (req, res) => {

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

RegionsRouter.get("/states", async (req, res) => {

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

RegionsRouter.get("/districts", async (req, res) => {
    const state = req.query.state as string;
    try {
        const regions = await prisma.region.findFirst({
            where: {
                state: state
            },
            select: {
                district: true
            }
        });
        if (!regions?.district) {
            res.status(404).send(null);
            return;
        }

        const districts = regions?.district
        res.send(districts);
    } catch(error) {
        res.status(500).send(error);
    }
})
export default RegionsRouter;