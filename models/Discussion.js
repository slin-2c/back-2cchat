import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Discussion = db.define("discussion", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  },
});

export default Discussion;
