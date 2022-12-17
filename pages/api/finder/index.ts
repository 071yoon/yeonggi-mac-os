import { NextApiRequest, NextApiResponse } from "next";
import { finderData } from "../../../utils/finder-data";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(finderData)) {
      throw new Error("Cannot find finder data");
    }

    res.status(200).json(finderData);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
