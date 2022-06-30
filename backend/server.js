const express = require("express");
const dotenv = require("dotenv").config();
const { errorLogger } = require("./middleware/errorLogger");
const { errroHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/orders", require("./routes/orderRoutes"));

app.use(errorLogger);
app.use(errroHandler);

app.listen(port, () => console.log(`server started on ${port}`));
