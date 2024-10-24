import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "home.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
