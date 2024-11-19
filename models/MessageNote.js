import { DataTypes } from "sequelize";
import db from "../config/db.js";

const MessageNote = db.define("messageNote", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  note: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default MessageNote;
