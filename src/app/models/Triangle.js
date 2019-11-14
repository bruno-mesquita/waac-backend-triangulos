import mongoose, { Schema } from 'mongoose';

const TriangleSchema = new Schema(
  {
    content: {
      type: Array,
      required: true,
    },
    sum: {
      type: Number,
      required: false,
    },
    selected: {
      type: Array,
      required: false,
    },
    time: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Triangle', TriangleSchema);
