import { DataTypes } from "sequelize";
import db from "../config/db.js";

const LikedMessage = db.define("message", {
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

export default LikedMessage;
