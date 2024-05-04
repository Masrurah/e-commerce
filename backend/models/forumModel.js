import mongoose from 'mongoose';

const ForumSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { minimize: false }
);

const Forum = mongoose.model('Forum', ForumSchema);

export default Forum;
