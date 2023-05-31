const { Heroes, HeroImage } = require('../models/')

const getAllHero = async (req, res) => {
  try {
    const { page = '0', pageSize = '5' } = req.query
    const offset = parseInt(page) * parseInt(pageSize)
    const limit = parseInt(pageSize)

    const data = await Heroes.findAndCountAll({
      include: [{
        model: HeroImage,
        attributes: ['url']
      }],
      attributes: ['nickname', 'id'],
      offset,
      limit,
      distinct: true
    })
    res.status(200).json({
      status: 200,
      data,
      page: parseInt(page),
      pageSize: parseInt(pageSize)
    })
  } catch (_) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later'
    })
  }
}

const getHeroById = async (req, res) => {
  try {
    const { id } = req.params
    const data = await Heroes.findByPk(id, {
      include: [{
        model: HeroImage,
        attributes: { exclude: ['heroId'] }
      }]
    })
    res.status(200).json({
      status: 200,
      data
    })
  } catch (_) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later'
    })
  }
}

const createHero = async (req, res) => {
  try {
    const { hero } = req.body
    const data = await Heroes.create({ ...hero })
    await HeroImage.create({
      url: hero.Images,
      heroId:	data.id
    })
    res.status(200).json({
      status: 200,
      data,
      message: "Hero was created"
    })
  } catch (_) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later'
    })
  }
}

const editHero = async (req, res) => {
  try {
    const { hero } = req.body
    const { id } = req.params
    await Heroes.update({ ...hero }, { where: { id } })
    await HeroImage.update({ url: hero.Images }, { where: { heroId: id } })
    res.status(200).json({
      status: 200,
      message: "Info was successfully updated"
    })
  } catch (_) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later'
    })
  }
}

const deleteHero = async (req, res) => {
  try {
    const { id } = req.params
    const findHero = await Heroes.findByPk(id)

    if (!findHero) {
      return res.status(404).json({
        status: 404,
        message: 'Hero wasn`t founded'
      })
    }

    await Heroes.destroy({ where: { id } })
    res.status(200).json({
      status: 200,
      message: 'Heroes was successfully deleted'
    })
  } catch (_) {
    res.status(500).json({
      status: 500,
      message: 'Some wrong with server. Please try later'
    })
  }
}

module.exports = {
  getAllHero,
  deleteHero,
  createHero,
  editHero,
  getHeroById
}
