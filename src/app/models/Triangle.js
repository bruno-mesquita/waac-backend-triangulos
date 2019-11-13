import mongoose, { Schema } from 'mongoose';

const TriangleSchema = new Schema(
  {
    content: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Triangle', TriangleSchema);
