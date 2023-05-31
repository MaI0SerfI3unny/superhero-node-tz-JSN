const Sequilize = require('sequelize')
const db = require('../services/db')
const HeroImage = require('./HeroImage')

const Heroes = db.define(
  'heroes',
  {
    id: {
      type: Sequilize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    nickname: {
      type: Sequilize.STRING,
      allowNull: false
    },
    real_name: {
      type: Sequilize.STRING,
      allowNull: false
    },
    origin_description: {
      type: Sequilize.TEXT,
      allowNull: false
    },
    superpowers: {
      type: Sequilize.TEXT,
      allowNull: false
    },
    catch_phrase: {
      type: Sequilize.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: 'heroes'
  }
)

// Associate to HeroImage
Heroes.hasOne(HeroImage)
HeroImage.belongsTo(Heroes)

module.exports = Heroes
