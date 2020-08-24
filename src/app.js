const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet")
const connectDB = require("./db");
require("dotenv/config")
const PORT = process.env.PORT || 5005;
const blogRouter = require("./routes/blogs/blogs")
const bodyParser = require("body-parser");

app.use(cors());
app.use(helmet())
app.use(bodyParser.json())

connectDB();

app.use("/api/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})