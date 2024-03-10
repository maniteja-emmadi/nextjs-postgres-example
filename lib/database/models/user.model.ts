import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sequelize", "postgres", "8142867966", {
	host: "localhost",
	dialect: "postgres",
	dialectModule: require("pg"),
});

export const User = sequelize.define("users", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	firstName: {
		type: DataTypes.STRING,
	},
	lastName: {
		type: DataTypes.STRING,
	},
	username: {
		type: DataTypes.STRING,
		unique: true,
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
	},
	password: {
		type: DataTypes.STRING,
	},
});
