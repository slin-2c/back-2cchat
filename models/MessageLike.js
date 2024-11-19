import { DataTypes } from "sequelize";
import db from "../config/db.js";

const MessageLike = db.define("messageLike", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  boolean: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default MessageLike;
