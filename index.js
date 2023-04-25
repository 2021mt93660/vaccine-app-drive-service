import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectdb from "./src/config/dbConfig.js";
import { vaccineRoute } from "./src/routes/index.js";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.PORT);

const PORT = process.env.PORT || 5001;

//Connect to Database
connectdb();

//Setup App
const app = express();

// app.use(
//   "/api-docs",
//   swaggerUi.serve,
//   swaggerUi.setup(options, { explorer: true })
// );

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//Routes
app.use("/vaccineDrive/", vaccineRoute);

app.listen(PORT, () => console.log(`server is running at ${PORT} port!!`));
