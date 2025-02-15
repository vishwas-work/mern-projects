import asyncHandler from "express-async-handler";

const taskController = {
  getTask: asyncHandler(async (req, res) => {
    res.status(200).json(1);
  }),
};

export default taskController;
