export default class Task {
  constructor(id, title, description, done, createdAt, updatedAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.done = done;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
