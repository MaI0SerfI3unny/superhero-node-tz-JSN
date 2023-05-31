const Sequilize = require('sequelize')
const db = require('../services/db')

const HeroImage = db.define(
  'hero_image',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    url: {
      type: Sequilize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'hero_image'
  }
)

module.exports = HeroImage
