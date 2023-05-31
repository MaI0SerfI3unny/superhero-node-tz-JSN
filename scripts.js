const fs = require("fs/promises");
const path = require("path");
require("dotenv").config({ path: "./.env" });
require("./models");
const db = require("./services/db");
const script = process.env.script;

const config = {
  seeders_folder: "seeders"
};

async function migrate () {
  await db.sync({ alter: true });
  console.log("All models were synchronized successfully.");
}

async function seed () {
  await Promise.all(
    Object.values(db.models).map(async (model) => {
      const filePath = path.join(
        __dirname,
        config.seeders_folder,
        `${model.name}.json`
      );
      try {
        const file = await fs.readFile(filePath);
        const data = JSON.parse(file);
        await db.queryInterface.bulkInsert(model.tableName, data);
      } catch (e) { console.log(e) }
    })
  );
}

const scripts = {
  migrate,
  seed
};

scripts[script]?.();
