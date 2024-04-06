import express from "express";

const app = express();

const PORT = process.env.PORT || 3020;

app.use(express.static("./web"))


app.listen(PORT, () => {
    console.log(`http://localhost:${3020}`)
});