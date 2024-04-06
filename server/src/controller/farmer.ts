import { Router } from "express";
import { PrismaService } from "../database";

const FarmerRouter = Router();

const prisma = PrismaService.getInstance()

// FarmerRouter.post("/farmer", (req, res) => {
    
// })

FarmerRouter.get("/farmer/:id/prediction", (req, res) => {

})



export default FarmerRouter;