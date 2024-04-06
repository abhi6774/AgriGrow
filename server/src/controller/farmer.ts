import { Router } from "express";
import { PrismaService } from "../database";

const FarmerRouter = Router();

const prisma = PrismaService.getInstance()

FarmerRouter.get("/:id/prediction", (req, res) => {

})



export default FarmerRouter;