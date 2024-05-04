import Forum from '../models/forumModel.js';
import asyncHandler from '../middleware/asyncHandler.js';

const getForums = asyncHandler(async (req, res) => {
  const forums = await Forum.find();
  res.json(forums);
});

const addForum = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const forum = await Forum.create({ title, description });
  res.json(forum);
});

export { getForums, addForum };
