import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";

dotenv.config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
