import Msg from "../models/Msg.js";

export const getAllMessages = (req, res) => {
  Msg.findAll({
    where: { discussion_id: req.params.id },
    attributes: { exclude: ["createdAt", "id", "updatedAt", "discussion_id"] },
  })
    .then((messages) => res.status(200).json(messages))
    .catch((err) => res.status(400).json(err));
};

export const getOneMessage = (req, res) => {
  Msg.findOne({ where: { id: req.params.id } })
    .then((message) => res.status(200).json({ message }))
    .catch((err) => res.status(404).json({ err }));
};

export const createMessage = (req, res) => {
  const newMessage = {
    text: req.body.text,
    sender: req.body.sender,
    user_id: req.body.userId,
    discussion_id: req.body.discussionId,
  };

  Msg.create(newMessage)
    .then(() => res.status(201).json({ msg: "Message created." }))
    .catch((err) => res.status(400).json({ err }));
};

export const deleteMessage = (req, res) => {
  Msg.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "Message deleted." }))
    .catch((err) => res.status(400).json({ err }));
};
