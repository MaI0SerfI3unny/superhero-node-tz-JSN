const fs = require("fs")
const uuid = require('uuid')

const verifyGallery = (req, _, next) => {
  const { Images = "" } = req.body.hero
  if (Images) {
    const base64 = Images.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const format = Images.substring("data:image/".length, Images.indexOf(";base64"))

    const buffer = new Buffer.from(base64[2], 'base64');
    try {
      const randomNum = uuid.v4()
      const linkImg = `mediafile/${randomNum}.${format}`
      fs.writeFileSync("./" + linkImg, buffer, 'base64');
      req.body.hero.Images = linkImg
    } catch (e) {
      throw new Error(JSON.stringify({
        status: 401,
        message: "Incorrect reading file"
      }))
    }
  }
  next()
}

module.exports = verifyGallery
