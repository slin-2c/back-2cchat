import Discussion from "../models/Discussion.js";

export const getAllDiscussions = (req, res) => {
  Discussion.findAll({
    where: { user_id: req.params.id },
    order: [["id", "DESC"]],
  })
    .then((discussions) => res.status(200).json(discussions))
    .catch((err) => res.status(400).json(err));
};

export const getOneDiscussion = (req, res) => {
  Discussion.findOne({ where: { id: req.params.id } })
    .then((discussion) => res.status(200).json({ discussion }))
    .catch((err) => res.status(404).json({ err }));
};

export const createDiscussion = (req, res) => {
  const newDiscussion = {
    user_id: req.body.userId,
  };

  Discussion.create(newDiscussion)
    .then((discussion) => res.status(201).json({ discussion: discussion.id }))
    .catch((err) => res.status(400).json({ err }));
};

export const deleteDiscussion = (req, res) => {
  Discussion.destroy({ where: { id: req.params.id } })
    .then(() => res.status(200).json({ msg: "Discussion deleted." }))
    .catch((err) => res.status(400).json({ err }));
};
