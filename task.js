function Task(description, difficultyLevel, urgencyLevel, reward, completed) {
  this.description = description;
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = completed;
};

module.exports = Task;