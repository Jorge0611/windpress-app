import { Schema, models, model } from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    project: {
      type: Schema.Types.ObjectId,
      ref: "Projects",
    },
    status: {
      type: String,
      required: true,
      default: "pending",
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

export default models.Tasks || model("Tasks", taskSchema);
