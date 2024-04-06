import { PrismaService } from "./database";
const prisma = PrismaService.getInstance();


async function getCropPrediction(farmerEmail: string) {
    const farmer = await prisma.farmer.findUnique({
        where: { email: farmerEmail },
        include: { crop_preference: true }
    });

    const requirements = farmer!.crop_preference[0].storage_capacity 
        + farmer!.crop_preference[0].demand 
        - farmer!.crop_preference[0].live_stock;

    // const prediction = 
}