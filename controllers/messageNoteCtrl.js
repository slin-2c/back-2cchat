import MessageNote from "../models/MessageNote.js";

export const getOneMessageNote = (req, res) => {
  MessageNote.findOne({ where: { id: req.params.id } })
    .then((messageNote) => res.status(200).json({ messageNote }))
    .catch((err) => res.status(404).json({ err }));
};

export const createMessageNote = (req, res) => {
  const newMessageNote = {
    note: req.body.note,
    user_id: req.body.userId,
    message_id: req.body.messageId,
  };

  MessageNote.create(newMessageNote)
    .then(() => res.status(201).json({ msg: "MessageNote created." }))
    .catch((err) => res.status(400).json({ err }));
};

export const updateMessageNote = (req, res) => {
  const newContent = {
    note: req.body.note,
  };

  MessageNote.update(newContent, { where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "MessageNote updated." }))
    .catch((err) => res.status(400).json({ err }));
};

export const deleteMessageNote = (req, res) => {
  MessageNote.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "MessageNote deleted." }))
    .catch((err) => res.status(400).json({ err }));
};
