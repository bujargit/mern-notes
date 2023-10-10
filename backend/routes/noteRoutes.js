const express = require("express");
const {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getNotes);
router.route("/create").post(protect, createNote);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, deleteNote)
  .put(protect, updateNote);

module.exports = router;
