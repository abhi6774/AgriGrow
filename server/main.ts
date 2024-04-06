import express from "express";
import { PrismaClient } from '@prisma/client';

const app = express();
let prismaClient: PrismaClient = new PrismaClient();

const PORT = process.env.PORT || 3000;





(async () => {
    await prismaClient.$connect();

    console.log("Connected to the database");

    app.listen(PORT, () => {
        console.log(`http://localhost2:${PORT}`)
    });
})()