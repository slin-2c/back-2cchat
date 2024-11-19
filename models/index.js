import Msg from "./Msg.js";
import MessageLike from "./MessageLike.js";
import MessageNote from "./MessageNote.js";
import LikedMessage from "./LikedMessage.js";
import Discussion from "./Discussion.js";
import User from "./User.js";

const association = () => {
  // Message
  Msg.belongsTo(Discussion, { foreignKey: "discussion_id" });
  Msg.hasOne(MessageLike, {
    foreignKey: "message_id",
    onDelete: "CASCADE",
  });
  Msg.hasOne(MessageNote, {
    foreignKey: "message_id",
    onDelete: "CASCADE",
  });
  Msg.hasOne(LikedMessage, {
    foreignKey: "message_id",
    onDelete: "CASCADE",
  });

  // MessageLike
  MessageLike.belongsTo(Msg, { foreignKey: "message_id" });
  MessageLike.belongsTo(User, { foreignKey: "user_id" });

  // MessageNote
  MessageNote.belongsTo(Msg, { foreignKey: "message_id" });
  MessageNote.belongsTo(User, { foreignKey: "user_id" });

  // LikedMessage
  LikedMessage.belongsTo(Msg, { foreignKey: "message_id" });

  // Discussion
  Discussion.hasMany(Msg, {
    foreignKey: "discussion_id",
    onDelete: "CASCADE",
  });
  Discussion.belongsTo(User, { foreignKey: "user_id" });

  // User Association
  User.hasMany(Discussion, { foreignKey: "user_id", onDelete: "CASCADE" });
  User.hasMany(MessageLike, { foreignKey: "user_id", onDelete: "CASCADE" });
  User.hasMany(MessageNote, { foreignKey: "user_id", onDelete: "CASCADE" });
};
export default association;
