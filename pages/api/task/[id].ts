import dbConnect from "../../../libs/dbConnect";
import Task from "../../../models/Task";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const task = await Task.findById(id);
        if (!task) return res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const task = await Task.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!task) return res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) return res.status(400).json({ success: false });

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
