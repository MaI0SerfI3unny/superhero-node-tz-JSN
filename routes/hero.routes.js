const router = require('express-promise-router')()
const {
  getAllHero,
  deleteHero,
  createHero,
  editHero,
  getHeroById
} = require("../controller/HeroController")
const {
  verifyGallery,
  checkStructHero,
  checkHeroById
} = require("../middleware/")

router.get('/get/hero', getAllHero)
router.get('/get/hero/:id', getHeroById)
router.post('/post/hero', [verifyGallery, checkStructHero], createHero)
router.put("/put/hero/:id", [checkStructHero, checkHeroById, verifyGallery], editHero)
router.delete('/delete/hero/:id', deleteHero)

module.exports = router
