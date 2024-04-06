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

FarmerRouter.post("/getbyemail", (req, res) => {
    const email = req.body.email;
    prisma.farmer.findUnique({
        where: {
            email: email
        }
    }).then((farmer) => {
        res.send(farmer);
    }).catch(err => {
        res.status(404).send(err);
    });
})

FarmerRouter.get("/:id/prediction", (req, res) => {

})



export default FarmerRouter;