import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Msg = db.define("msg", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },

  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  sender: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

export default Msg;
