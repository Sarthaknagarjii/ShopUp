import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";

//configure env
dotenv.config();

//database config
connectDB();

// rest object
const app = express();

//middleware

app.use(
  cors({
    origin: "http://localhost:3000", // Frontend origin
    methods: ["get", "post", "put", "delete"],
    credentials: true,
  })
);

app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1> Welcome to Ecommorce Website </h1>");
});

//port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server is Running on ${process.env.DEV_MODE} mode on Port ${PORT}`
  );
});
