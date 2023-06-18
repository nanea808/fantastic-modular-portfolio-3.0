require("dotenv").config();
const db = require("../config/connection");
const { User, Project } = require("../models");

//seed files
const userSeeds = require("./userSeeds.json");
const projectSeeds = require("./projectSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    await Project.deleteMany({});
    await Project.create(projectSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("all done!");
  process.exit(0);
});
