import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan"
import ConnectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/CategoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

dotenv.config();

//database config
ConnectDB();

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Welcome</h1>"
    )
})

const port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on ${port}`.bgCyan.white);
})