# Team Strivers

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
This project was developed as part of the 36-hour hackathon WittyHack. We would like to express our gratitude to the organizers for providing this opportunity and to all contributors for their hard work and dedication.
* Abhishek Mourya:
* Aaryan Karma:
* Gobhuli Vyas:
* Pragyan Patidar: Timepass kiya bss

