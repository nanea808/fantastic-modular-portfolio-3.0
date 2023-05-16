const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
  title: { type: String, required: true },
  repo: { type: String, required: true },
  description: { type: String, required: true },
  deployment: { type: String },
});

const Project = model("project", projectSchema);

module.exports = Project;
