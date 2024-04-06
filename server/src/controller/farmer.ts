import { Router } from "express";
import { PrismaService } from "../database";

const FarmerRouter = Router();

const prisma = PrismaService.getInstance()

FarmerRouter.get("/:id", (req, res) => {
    const farmerId = req.params.id;

    prisma.farmer.findUnique({
        where: {
            id: farmerId
        }
    }).then((farmer) => {
        res.send(farmer);
    }).catch(err => {
        res.send(err);
    });
})

FarmerRouter.get("/:id/prediction", (req, res) => {

})



export default FarmerRouter;