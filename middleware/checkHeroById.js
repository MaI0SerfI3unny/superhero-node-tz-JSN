const { Heroes } = require('../models/')

const checkHeroById = async (req, _, next) => {
  const { id } = req.params
  const findHero = await Heroes.findByPk(id)
  if (!findHero) {
    throw new Error(JSON.stringify({
      status: 404,
      message: "Hero wasn`t founded"
    }))
  }
  next()
}

module.exports = checkHeroById
