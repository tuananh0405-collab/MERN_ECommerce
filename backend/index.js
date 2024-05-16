//pakages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//utiles
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware parses JSON responses
app.use(express.json());

// Middleware parses form data POST parameters
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
