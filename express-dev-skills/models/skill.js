const skills = [
  { id: 001, skill: "HTML", level: "3/5" },
  { id: 002, skill: "CSS", level: "3/5" },
  { id: 003, skill: "JavaScript", level: "3/5" },
  { id: 004, skill: "NodeJS & Express", level: "2/5" },
  { id: 005, skill: "MondoDB & Mongoose", level: "2/5" },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  const idx = skills.findIndex((skill) => skill.id === parseInt(id));
  skills.splice(idx, 1);
}

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
