# Team Strivers

# Introduction 
AgriGrow is a web-based project aimed at revolutionizing agriculture using cutting-edge technologies. We collect basic farmer details and preferences for crops they intend to grow this season. Leveraging financial and local region data, the project provides optimal crop recommendations.


# Problems being addressed

1. Limited Access to Market Information: Lack of access to real-time market data and information about consumer preferences makes it difficult for farmers to make informed decisions.    
2. Storage and Preservation: Inadequate storage facilities and post-harvest management practices result in crop spoilage and wastage, impacting both supply and demand dynamics.

# Solution
The user(Farmer) gives basic data i.e. Name, Field Area, Location and it is feeded in his profile. Based on the preferred crops, the user gets the most accurate crops to be grown to uplift financiability. The system collects data from the local mandis which helps to get the percenatge of demand, risk involved and the suitable timeline. 

# Features
1. Categorises the crop demand and supply based on demography.
2. Easy to use and scalable.
3. Real time data on hand tips.
4. Bridge gap between supply and chain.

# Getting Started
## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have installed the latest version of [Node.js and npm](https://nodejs.org/en/download/)

To Setup this project, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/Wittyhacks4CR003/WH024_Team_Strivers
```
2. Navigate to the project directory:
```bash
cd WH024_Team_Strivers
```
---
### Server Setup

## Setting Up Environment Variables

This project requires certain environment variables to be set. Here's how you can set them up:

1. In the root directory of the project, create a new file and name it `.env`.

2. Open the `.env` file and set the environment variables in this format:

   ```bash
   DATABASE_URL=<your_mongodb_database_url>
   ```
   Replace `<your_mongodb_database_url>` with your actual database URL.

3. Save the `.env` file. The application will now have access to the values you set in the `.env` file.

4. Install the dependencies in both frontend and backend folder:
```bash
npm install
```
5. Prisma Generate:
```bash
cd server
```
```bash
npx prisma generate
```
6. Start Server in both frontend and backend folder:

```bash
npm run dev
```
---
# Acknowledgment
This project was developed as part of the 36-hour hackathon wittyhacks. We would like to express our gratitude to the organizers for providing this opportunity and to all contributors for their hard work and dedication.
* Abhishek Mourya:
* Aaryan Karma:
* Godhuli Vyas:
* Pragyan Patidar: 
