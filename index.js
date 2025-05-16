import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

console.log(process.env.PORT);
let port = process.env.PORT || 5120;

app.listen(port, () => {
  console.log(`Backend service is running on : http://localhost:${port}/`);
});

app.get("/", (req, res) => {
  res.send("Home page");
})
app.get("/test", (req, res) => {
  console.log(req.params);
  
  res.json({
    msg: "Hiiiii world"
  })
});
