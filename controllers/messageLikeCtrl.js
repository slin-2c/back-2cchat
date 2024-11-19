import MessageLike from "../models/MessageLike.js";

// get message like by id
export const getLikeforMessage = (req, res) => {
  MessageLike.get({ where: { message_id: req.params.id } })
    .then((like) => res.status(200).json({ like }))
    .catch((err) => res.status(400).json({ err }));
};

export const likeDislikeMessage = (req, res) => {
  MessageLike.findOne({
    where: { message_id: req.body.messageId, user_id: req.body.userId },
  })
    .then((result) => {
      if (result == null) {
        MessageLike.create({
          user_id: req.body.userId,
          message_id: req.body.messageId,
          boolean: req.body.boolean,
        })
          .then(() => res.status(201).json({ msg: "like created" }))
          .catch((err) => res.status(400).json(err));
      } else if (result && result.boolean === req.body.boolean) {
        MessageLike.destroy({
          where: { message_id: req.body.messageId, user_id: req.body.userId },
        })
          .then(() => res.status(200).json({ msg: "-1 like" }))
          .catch((err) => res.status(400).json({ err }));
      } else {
        MessageLike.update({
          where: {
            message_id: req.body.messageId,
            user_id: req.body.userId,
            boolean: req.body.boolean,
          },
        })
          .then(() => res.status(200).json({ msg: "like mis à jour" }))
          .catch((err) => res.status(400).json({ err }));
      }
    })
    .catch((err) => res.status(400).json({ err }));
};

// if not null = liked
export const likedByUser = (req, res) => {
  MessageLike.findOne({
    where: { message_id: req.params.messageId, user_id: req.params.userId },
  })
    .then((result) => res.status(200).json({ result }))
    .catch((err) => res.status(400).json({ err }));
};
