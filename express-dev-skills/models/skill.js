const skills = [
  { id: 001, skill: "HTML", level: "⭐️⭐️⭐️" },
  { id: 002, skill: "CSS", level: "⭐️⭐️⭐️" },
  { id: 003, skill: "JavaScript", level: "⭐️⭐️⭐️" },
  { id: 004, skill: "NodeJS & Express", level: "⭐️⭐️" },
  { id: 005, skill: "MondoDB & Mongoose", level: "⭐️⭐️" },
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
