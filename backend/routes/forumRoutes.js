import express from 'express';
import { getForums, addForum } from '../controllers/forumController.js';

const router = express.Router();

router.get('/', getForums);
router.post('/create', addForum);

export default router;
