const express = require("express");
const app = express();
const port = 5000;

const cors = require("cors");

const userRouter = require("./router/userRouter");
const platformRouter = require("./router/platformRouter");

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(express.json());

app.use("/user", userRouter);
app.use("/platform", platformRouter);

app.listen(port, () => {
  console.log("server started");
});