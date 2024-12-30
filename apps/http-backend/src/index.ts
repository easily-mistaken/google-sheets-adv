import express from "express";
// import prismaClient from "@repo/prisma/client";

const app = express();
app.use(express.json());

app.get("/signup", (req, res) => {
  res.send("Signup page");
});

app.get("/signin", (req, res) => {
  res.send("Signup page");
});

app.post("/sheet", (req, res) => {
  res.send("Signup page");
});

app.get("/sheet", (req, res) => {
  res.send("Signup page");
});

app.put("/sheet", (req, res) => {
  res.send("Signup page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
