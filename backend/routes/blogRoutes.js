// backend/routes/blogRoutes.js
const express = require("express");
const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(getAllBlogs).post(protect, createBlog);

router
  .route("/:id")
  .get(getBlogById)
  .put(protect, updateBlog)
  .delete(protect, deleteBlog);

module.exports = router;
