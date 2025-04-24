const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");
//const Category = require("./Category");

const Service = sequelize.define(
    "Service",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     notEmpty: { msg: "O nome do serviço é obrigatório." },
            // },
        },
        description: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: { msg: "A descrição do serviço é obrigatória." },
            // },
        },
        price: {
            type: DataTypes.FLOAT,
            // allowNull: false,
            // validate: {
            //     isFloat: { msg: "O preço deve ser um número." },
            //     min: { args: [0], msg: "O preço não pode ser negativo." }
            // },
        },
        estimatedTime: {
            type: DataTypes.STRING,
            // allowNull: false,
            // validate: {
            //     notEmpty: { msg: "O tempo estimado é obrigatório." },
            // },
        },
        restrictions: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        additionalNotes: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    { timestamps: true }
);
 Service.sync({force:false})
module.exports = Service;
