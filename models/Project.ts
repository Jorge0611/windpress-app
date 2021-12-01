import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    start_date: {
      type: Date,
      required: true,
    },
    due_date: {
      type: Date,
      required: true,
    },
    assigned_to: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.models.Projects ||
  mongoose.model("Projects", projectSchema);
