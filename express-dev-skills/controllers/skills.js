const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
  });
}

function show(req, res) {
  const id = parseInt(req.params.id);

  res.render("skills/show", { skill: Skill.getOne(id) });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function deleteSkill(req, res, next) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function create(req, res, next) {
  Skill.create(req.body);
  res.redirect("/skills");
}

module.exports = {
  index,
  show,
  create,
  new: newSkill,
  delete: deleteSkill,
};
