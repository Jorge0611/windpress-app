import type { NextApiRequest, NextApiResponse } from 'next'
import Task from "../../../../models/Task";
import dbConnect from "../../../../libs/dbConnect";



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
  } = req;

  await dbConnect();

  try {
    const project = await Task.find({ project: { $gte: id } });
    if (!project) return res.status(400).json({ success: false});

    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(400).json({ success: false });
  }
}
