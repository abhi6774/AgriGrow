import { initPrisma, PrismaService } from "./src/database";
import location_wise_data from "./src/data/location_wise_data.json";
import { faker } from "@faker-js/faker"


function getSet() {
    const crops = new Set<string>();

    for (const location of location_wise_data.states) {
        for (const crop of location.agricultural_products) {
            crops.add(crop)
        }
    }

    return crops;
}

async function load_location_data(service: PrismaService, data: typeof location_wise_data) {
    const crops = getSet();

    for (let crop of crops) {
        const demand = Math.round(Math.random() * 10000);
        await service.crop.create({
            data: {
                name: crop,
                demand: demand,
                storage_capacity: Math.round(demand * 0.2),
                live_stock: Math.round(demand * 0.05), 
            }
        })
    }
}

async function connect_collections(service: PrismaService, data: typeof location_wise_data) {
    const regions = await service.region.findMany({
        select: {
            id: true,
            state: true,
            district: true,
        }
    });
    for (let state of data.states) {
        let region = regions.find(region => region.state === state.name);
        if (region) {
            for (let crop of state.agricultural_products) {
                await service.crop.updateMany({
                    where: {
                        name: crop
                    }, 
                    data: {
                        regionId: region.id
                    }
                })
            }
        }
    }
}

function generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function generateRandomFarmer(prisma: PrismaService, count: number) {
    const regions = await prisma.region.findMany({
        select: {
            id: true,
            state: true,
            district: true,
        }
    });

    const crops = await prisma.crop.findMany({
        select: {
            id: true,
            name: true,
        }
    });

    
    while(count--) {
        const region = regions[generateRandomNumber(0, regions.length - 1)];
        const crop = crops[generateRandomNumber(0, crops.length - 1)];
        const land_area = generateRandomNumber(1, 50);
        const name = faker.person.fullName();
        const email = faker.internet.email(); 

        const farmer = await prisma.farmer.create({
            data: {
                email,
                name,
                land_area,
                region: {
                    connect: {
                        id: region.id
                    }
                },
                crop_preference: {
                    connect: {
                        id: crop.id
                    },
                }
            }
        })

    }


    
}



(async () => {
    await initPrisma()
    console.log("Connected to the database")
    const prisma = PrismaService.getInstance();
    // await load_location_data(prisma, location_wise_data);
    // connect_collections(prisma, location_wise_data);
    generateRandomFarmer(prisma, 100);
})()