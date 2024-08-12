const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtsController");

// Route to get all thoughts and create new thought
router.route("/").get(getThoughts).post(createThought);

// Route for getting, updating, and deleting single thought by ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction);

router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(removeReaction);

module.exports = router;
