import express, { application } from "express";
import cors from "cors";
import { initPrisma, PrismaService } from "./src/database";

import { RequestLogger } from "./src/logger";
import RegionsRouter from "./src/controller/regions";
import FarmerRouter from "./src/controller/farmer";

const app = express();
const PORT = process.env.PORT || 3000;

const prisma = PrismaService.getInstance();

app.use(cors({
    origin: "*"
}));
app.use(express.json());    
app.use(RequestLogger);

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.post("/api/v1/signup", (req, res) => {
    const {email, name, land_area, state, district, crop_name } = req.body;
    prisma.farmer.create({
        data: {
            name,
            email,
            land_area,
            region: {
                connect: {
                    state: state
                }
            },
            crop_preference: {
                connect: {
                    name: crop_name
                }
            }
        }
    }).then((farmer) => {
        res.send(farmer);
    }).catch(err => {
        res.send(err);
    });
})

app.use("/api/v1", FarmerRouter);
app.use("/api/v1", RegionsRouter);

app.use(express.static("./web"));

(async () => {
    await initPrisma();
    console.log("Connected to the database")
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    });
})()