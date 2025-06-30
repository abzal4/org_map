const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());

const uri = "mongodb://localhost:27017"; // Или MongoDB Atlas URI
const client = new MongoClient(uri);

app.get("/cities", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("practice");
    const collection = db.collection("for_map");

    // Только нужные поля: name, lat, lon, description (без _id)
    const cities = await collection
      .find({}, { projection: { _id: 0,
        lat: 1, 
        lon: 1,
        attendant: "$Сопровождающие", 
        bin: 1, 
        connected_to_exdbo: "$Подключены к ЕХД БО",
        org_name: "$Наименование организации",
        bin: "$БИН",
        address: "$Адрес",
        region_kato: "$Регион по КАТО" 
      }})
      .toArray();

    res.json(cities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("✅ Сервер запущен на http://localhost:3000");
});
