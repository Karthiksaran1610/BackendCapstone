import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import authRoute from "./Routers/authRouter.js";
import userRoute from "./Routers/userRouter.js";
import listingRoute from "./Routers/listing.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(userRoute);

//Error handler

app.use((req, res, next, err) => {
  const statuscode = res.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statuscode).json({
    succsess: false,
    statuscode,
    message,
  });
});

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//API routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/listing", listingRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port`);
});
