module.exports = app => {
  const notes = require("../controller/note.controller");

  //Create a new note
  app.post("/notes", notes.create);

  //Retrieve all the notes
  app.get("/notes", notes.findAll);

  // Retrieve a single Note with noteId
  app.get("/notes/:noteId", notes.findOne);

  //Update a single note with noteId
  app.put("/notes/:noteId", notes.update);

  // Delete a Note with noteId
  app.delete("/notes/:noteId", notes.delete);
};
